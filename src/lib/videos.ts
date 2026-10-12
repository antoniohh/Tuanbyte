export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  dateText: string;
  viewsText: string | null;
}

const FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCD6wDPVAuQuQX0xNGIqq9xA";
const CHANNEL_URL =
  "https://www.youtube.com/channel/UCD6wDPVAuQuQX0xNGIqq9xA/videos";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36";
// Las miniaturas se enlazan hot desde i.ytimg.com (permitido por YouTube,
// con `loading="lazy"`); no se almacenan copias locales.
import fallbackRaw from "@/data/videos-fallback.json";

const dateFmt = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function asVideo(id: string, title: string, dateText: string, views: number | null): Video {
  return {
    id,
    title,
    url: `https://www.youtube.com/watch?v=${id}`,
    thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    dateText,
    viewsText: views === null ? null : fmtViews(views),
  };
}

export function fmtViews(views: number): string {
  if (views >= 1_000_000)
    return `${(views / 1_000_000).toFixed(1).replace(".", ",")} M visualizaciones`;
  if (views >= 1_000)
    return `${Math.round(views / 100) / 10} mil visualizaciones`;
  return `${views} visualizaciones`;
}

function prettyAge(text: string): string {
  return text.replace(/^hace\s+(\d+)\s+m$/, "hace $1 meses");
}

async function fromFeed(): Promise<Video[] | null> {
  try {
    const res = await fetch(FEED_URL, { headers: { "User-Agent": UA } });
    if (!res.ok) return null;
    const xml = await res.text();
    const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g);
    if (!entries?.length) return null;
    const fields = (block: string, tag: string) => {
      const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
      return m ? m[1] : "";
    };
    return entries
      .map((e) => {
        const id = fields(e, "yt:videoId");
        const title = fields(e, "title");
        const published = fields(e, "published");
        const viewsRaw = e.match(/media:statistics\s+views="(\d+)"/);
        let dateText = "";
        if (published) {
          try {
            dateText = dateFmt.format(new Date(published));
          } catch {
            dateText = "";
          }
        }
        return asVideo(
          id,
          title,
          dateText,
          viewsRaw ? Number(viewsRaw[1]) : null,
        );
      })
      .filter((v) => {
        const hashtags = (v.title.match(/#\w+/g) ?? []).length;
        return hashtags < 3;
      });
  } catch {
    return null;
  }
}

function extractJson(html: string): unknown | null {
  const i = html.indexOf("ytInitialData");
  if (i === -1) return null;
  const start = html.indexOf("{", i);
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let j = start; j < html.length; j++) {
    const c = html[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === '"') inStr = false;
    } else if (c === '"') inStr = true;
    else if (c === "{") depth++;
    else if (c === "}" && --depth === 0)
      return JSON.parse(html.slice(start, j + 1));
  }
  return null;
}

async function fromChannelPage(): Promise<Video[] | null> {
  try {
    const res = await fetch(CHANNEL_URL, {
      headers: { "User-Agent": UA, Cookie: "CONSENT=YES+1" },
    });
    if (!res.ok) return null;
    const data = extractJson(await res.text());
    if (!data) return null;
    const out: (Video | null)[] = [];
    const walk = (node: unknown) => {
      if (Array.isArray(node)) {
        node.forEach(walk);
        return;
      }
      if (!node || typeof node !== "object") return;
      const obj = node as Record<string, any>;
      const lockup = obj.lockupViewModel;
      if (lockup && typeof lockup === "object") {
        const id = typeof lockup.contentId === "string" ? lockup.contentId : "";
        const meta = lockup?.metadata?.lockupMetadataViewModel;
        const title =
          typeof meta?.title?.content === "string" ? meta.title.content : "";
        const parts: string[] = [];
        const collect = (x: any) => {
          if (Array.isArray(x)) {
            x.forEach(collect);
            return;
          }
          if (!x || typeof x !== "object") return;
          if (Array.isArray(x.metadataParts))
            for (const p of x.metadataParts) {
              const t = p?.text?.content;
              if (typeof t === "string" && t) parts.push(t);
            }
          Object.values(x).forEach(collect);
        };
        collect(meta);
        if (id && title) {
          const viewsText = parts[0] ?? "";
          const views = /^\d+/.test(viewsText)
            ? Number(viewsText.replace(/[^\d]/g, ""))
            : null;
          out.push(asVideo(id, title, prettyAge(parts[1] ?? ""), views));
        }
        return;
      }
      Object.values(obj).forEach(walk);
    };
    walk(data);
    return out.filter((v): v is Video => v !== null);
  } catch {
    return null;
  }
}

function fromFallback(): Video[] {
  const raw = fallbackRaw as Array<Record<string, string>>;
  return raw
    .filter((v) => typeof v.id === "string" && typeof v.title === "string")
    .map((v) => asVideo(v.id, v.title, prettyAge(v.age ?? ""), null));
}

export async function getVideos(limit = 6): Promise<Video[]> {
  const viaScrape = await fromChannelPage();
  if (viaScrape?.length) return viaScrape.slice(0, limit);
  console.warn("[videos] scrape no disponible; probando el feed");
  const viaFeed = await fromFeed();
  if (viaFeed?.length) return viaFeed.slice(0, limit);
  console.warn("[videos] feed no disponible; usando fallback local");
  return fromFallback().slice(0, limit);
}

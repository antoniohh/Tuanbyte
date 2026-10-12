export interface Playlist {
  id: string;
  title: string;
  url: string;
  countText: string;
}

const PLAYLISTS_URL =
  "https://www.youtube.com/channel/UCD6wDPVAuQuQX0xNGIqq9xA/playlists";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125 Safari/537.36";
import fallbackRaw from "@/data/playlists-fallback.json";

function asPlaylist(id: string, title: string, countText: string): Playlist {
  return {
    id,
    title,
    url: `https://www.youtube.com/playlist?list=${id}`,
    countText,
  };
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

async function fromChannelPlaylists(): Promise<Playlist[] | null> {
  try {
    const res = await fetch(PLAYLISTS_URL, {
      headers: { "User-Agent": UA, Cookie: "CONSENT=YES+1" },
    });
    if (!res.ok) return null;
    const data = extractJson(await res.text());
    if (!data) return null;
    const out: (Playlist | null)[] = [];
    const walk = (node: unknown) => {
      if (Array.isArray(node)) {
        node.forEach(walk);
        return;
      }
      if (!node || typeof node !== "object") return;
      const obj = node as Record<string, any>;
      const lockup = obj.lockupViewModel;
      if (lockup && typeof lockup === "object") {
        if (lockup.contentType === "LOCKUP_CONTENT_TYPE_PLAYLIST") {
          const id = typeof lockup.contentId === "string" ? lockup.contentId : "";
          const meta = lockup?.metadata?.lockupMetadataViewModel;
          const title =
            typeof meta?.title?.content === "string" ? meta.title.content : "";
          const raw = JSON.stringify(lockup?.contentImage ?? {});
          const countMatch = raw.match(/"([\d.]+) v[ií]deos?"/);
          const countText = countMatch
            ? `${countMatch[1]} ${countMatch[1] === "1" ? "vídeo" : "vídeos"}`
            : "";
          const num = countMatch ? Number(countMatch[1].replace(/\./g, "")) : 0;
          if (id && title && num > 0) out.push(asPlaylist(id, title, countText));
        }
        return;
      }
      Object.values(obj).forEach(walk);
    };
    walk(data);
    return out.filter((p): p is Playlist => p !== null);
  } catch {
    return null;
  }
}

function fromFallback(): Playlist[] {
  const raw = fallbackRaw as Array<Record<string, string>>;
  return raw
    .filter((p) => typeof p.id === "string" && typeof p.title === "string")
    .map((p) => asPlaylist(p.id, p.title, p.countText ?? ""));
}

export async function getPlaylists(limit = 5): Promise<Playlist[]> {
  const viaScrape = await fromChannelPlaylists();
  if (viaScrape?.length) return viaScrape.slice(0, limit);
  console.warn("[playlists] scrape no disponible; usando fallback local");
  return fromFallback().slice(0, limit);
}

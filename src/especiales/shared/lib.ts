import type { Tag } from "@/especiales/guia-motos/types";

export function formatScore(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

export function formatDec(value: number): string {
  return value.toFixed(1).replace(".", ",");
}

export function modelClass(tag: Tag): string {
  switch (tag) {
    case "winner":
      return "font-bold text-minium";
    case "new":
      return "font-semibold text-ink";
    case "bmw":
      return "font-semibold text-ink-soft";
    default:
      return "text-ink";
  }
}

export function tagChip(tag: Tag): { label: string; class: string } | null {
  if (tag === "winner")
    return {
      label: "ganadora",
      class: "bg-minium text-paper",
    };
  if (tag === "new")
    return {
      label: "novedad",
      class: "bg-strike text-ink",
    };
  return null;
}

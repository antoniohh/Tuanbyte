import type { Tag } from "@/especiales/shared/types";

export type Etapa = 1 | 2 | 3;
export type Alcance = "común" | "moto" | "coche";

export interface Herramienta {
  id: string;
  name: string;
  type: string;
  rank: number;
  scoreValue: number;
  img: string;
  etapa: Etapa;
  alcance: Alcance;
  specs: { label: string; value: string }[];
  desc: string;
  videos: { id: string; title: string }[];
}

export interface OrdenRow {
  model: string;
  tag: Tag;
  uso: number;
  desbloqueo: number;
  barata: number;
  nota: number;
}

export interface EtapaRow {
  n: Etapa;
  title: string;
  lema: string;
  presupuesto: string;
  items: { label: string; id?: string }[];
}

export interface MarcaRow {
  marca: string;
  gama: string;
  bueno: string;
  flojo: string;
  veredicto: string;
}

export interface RutaRow {
  ruta: string;
  entra: string;
  llegas: string;
  marcas: string;
}

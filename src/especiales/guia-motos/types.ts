import type { Medal, Tag } from "@/especiales/shared/types";

export type { Medal, Tag };

export type DiyLevel = "high" | "med" | "low";

export interface Bike {
  id: string;
  name: string;
  type: string;
  rank: number;
  scoreValue: number;
  badge: DiyLevel;
  diyText: string;
  img: string;
  motor: string;
  frenos: string;
  llantas: string;
  peso: string;
  precio: string;
  desc: string;
}

export interface RankingRow {
  pos: string;
  medal: Medal;
  model: string;
  tag: Tag;
  fiabilidad: number;
  casero: number;
  potencia: number;
  polivalencia: number;
  consumo: number;
  nota: number;
}

export interface CicloRow {
  model: string;
  tag: Tag;
  motor: string;
  potencia: string;
  suspension: string;
  frenos: string;
  neumaticos: string;
  peso: string;
}

export interface PrecioRow {
  model: string;
  tag: Tag;
  pvp: string;
  obs: string;
}

export interface RevisionRow {
  model: string;
  tag: Tag;
  intervalo: string;
  consumo: string;
  coste: string;
  complejidad: string;
}

export interface DiyRow {
  model: string;
  tag: Tag;
  basicos: string;
  valvulas: string;
  frenos: string;
  embrague: string;
  badge: DiyLevel;
  badgeText: string;
}

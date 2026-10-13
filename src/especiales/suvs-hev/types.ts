export type DiyLevel = "high" | "med" | "low";
export type Tag = "winner" | "new" | null;
export type Medal = "gold" | "silver" | "bronze" | null;

export interface Car {
  id: string;
  name: string;
  brand: string;
  segment: string;
  longitud: string;
  rank: number;
  scoreValue: number;
  img: string;
  sistema: string;
  motor: string;
  potencia: string;
  cambio: string;
  traccion: string;
  consumo: string;
  maletero: string;
  peso: string;
  precio: string;
  garantia: string;
  etiqueta: string;
  desc: string;
}

export interface RankingRow {
  pos: string;
  medal: Medal;
  model: string;
  tag: Tag;
  fiabilidad: number;
  mantenimiento: number;
  precioEquip: number;
  espacio: number;
  consumo: number;
  nota: number;
}

export interface PrecioRow {
  model: string;
  tag: Tag;
  pvp: string;
  obs: string;
}

export interface ConsumoRow {
  model: string;
  tag: Tag;
  consumo: string;
  mantenimiento: string;
}

export interface TecnicoRow {
  model: string;
  tag: Tag;
  segmento: string;
  motor: string;
  potencia: string;
  cambio: string;
  maletero: string;
  garantia: string;
}

export interface MantenimientoRow {
  model: string;
  tag: Tag;
  aceiteFiltros: string;
  frenos: string;
  suspension: string;
  bateriaLuces: string;
  interiorExterior: string;
  badge: DiyLevel;
  badgeText: string;
}

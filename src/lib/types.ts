// Per-country data schema. See geolearn-africa-spec.md §4.
import type {
  CenterLineColor,
  ContinentId,
  DistanceUnit,
  DriveSide,
  LaneLineColor,
  SignStandard,
  TerrainTag,
  UtilityPoleMaterial,
} from "./taxonomy";

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface LanguageEntry {
  name: string;
  family: string;
  /** Free-text qualifier, e.g. "widely used" or "co-official". */
  note?: string;
}

export interface LanguageInfo {
  official: LanguageEntry[];
  /** Widely-spoken languages without official status (e.g. Nigeria's Hausa/Yoruba/Igbo). */
  notable?: LanguageEntry[];
  /** Free-text footnote, e.g. "11 official languages total" when `official` lists only a curated subset. */
  note?: string;
  script: string;
}

export interface RoadInfraPlate {
  color: string;
  shape: string;
  frontRequired: boolean;
}

export interface RoadInfraUtilityPole {
  material: UtilityPoleMaterial;
  transformerMount: string;
}

export interface RoadInfra {
  centerLineColor: CenterLineColor;
  laneLineColor?: LaneLineColor;
  distanceUnit: DistanceUnit;
  signStandard: SignStandard;
  plate: RoadInfraPlate;
  bollardStyle: string;
  utilityPole: RoadInfraUtilityPole;
}

/**
 * Secondary, low-confidence signal only — never a primary identification
 * method, never appearance/ethnicity-based. `confidence` and `caveat` are
 * required so every entry carries its own guardrail.
 */
export interface CulturalMarker {
  item: string;
  note: LocalizedText;
  confidence: number;
  caveat: string;
}

export interface CountryImage {
  source: string;
  url: string;
  license: string;
  attribution: string;
  caption: LocalizedText;
  tags: string[];
}

export interface Country {
  id: string;
  continent: ContinentId;
  subregion: string;
  flagEmoji: string;
  names: LocalizedText;
  driveSide: DriveSide;
  language: LanguageInfo;
  terrainTags: TerrainTag[];
  terrainDescription: LocalizedText;
  roadInfra: RoadInfra;
  historicalContext: LocalizedText;
  culturalMarkers: CulturalMarker[];
  commonlyConfusedWith: string[];
  images: CountryImage[];
}

export interface Continent {
  id: ContinentId;
  names: LocalizedText;
}

export interface Subregion {
  id: string;
  continent: ContinentId;
  names: LocalizedText;
}

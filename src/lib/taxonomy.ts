// Controlled vocabulary shared identically across every continent's country data.
// See geolearn-africa-spec.md §3.

export const CONTINENT_IDS = [
  "africa",
  "asia",
  "europe",
  "north-america",
  "south-america",
  "oceania",
] as const;
export type ContinentId = (typeof CONTINENT_IDS)[number];

export const TERRAIN_TAGS = [
  "rainforest",
  "savanna",
  "desert",
  "mediterranean",
  "temperate-forest",
  "steppe-grassland",
  "highland-mountain",
  "coastal",
  "boreal-taiga",
  "tundra",
  "agricultural-plains",
  "urban-dense",
] as const;
export type TerrainTag = (typeof TERRAIN_TAGS)[number];

export const CENTER_LINE_COLORS = ["yellow", "white", "none"] as const;
export type CenterLineColor = (typeof CENTER_LINE_COLORS)[number];

export const LANE_LINE_COLORS = ["white", "yellow"] as const;
export type LaneLineColor = (typeof LANE_LINE_COLORS)[number];

export const DISTANCE_UNITS = ["km", "mile"] as const;
export type DistanceUnit = (typeof DISTANCE_UNITS)[number];

export const SIGN_STANDARDS = [
  "vienna-convention",
  "us-mutcd",
  "uk",
  "other",
] as const;
export type SignStandard = (typeof SIGN_STANDARDS)[number];

export const UTILITY_POLE_MATERIALS = ["wood", "concrete", "steel"] as const;
export type UtilityPoleMaterial = (typeof UTILITY_POLE_MATERIALS)[number];

export const DRIVE_SIDES = ["left", "right"] as const;
export type DriveSide = (typeof DRIVE_SIDES)[number];

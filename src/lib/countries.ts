// Server-only data access layer over /data. Reads JSON files from disk —
// do not import this module from a Client Component.
import fs from "node:fs";
import path from "node:path";
import type { Continent, Country, Subregion } from "./types";
import type { ContinentId } from "./taxonomy";

const DATA_ROOT = path.join(process.cwd(), "data");
const COUNTRIES_DIR = path.join(DATA_ROOT, "countries");
const TAXONOMY_DIR = path.join(DATA_ROOT, "taxonomy");

export function listCountryIds(): string[] {
  if (!fs.existsSync(COUNTRIES_DIR)) return [];
  return fs
    .readdirSync(COUNTRIES_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""))
    .sort();
}

export function getCountryById(id: string): Country | null {
  const filePath = path.join(COUNTRIES_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Country;
}

export function getAllCountries(): Country[] {
  return listCountryIds()
    .map((id) => getCountryById(id))
    .filter((c): c is Country => c !== null);
}

export function getCountriesByContinent(continentId: string): Country[] {
  return getAllCountries().filter((c) => c.continent === continentId);
}

export function getCountriesBySubregion(subregionId: string): Country[] {
  return getAllCountries().filter((c) => c.subregion === subregionId);
}

export function getContinents(): Continent[] {
  const raw = fs.readFileSync(
    path.join(TAXONOMY_DIR, "continents.json"),
    "utf-8",
  );
  return JSON.parse(raw) as Continent[];
}

export function getContinentById(id: string): Continent | null {
  return getContinents().find((c) => c.id === id) ?? null;
}

export function getSubregions(continentId?: ContinentId): Subregion[] {
  const raw = fs.readFileSync(
    path.join(TAXONOMY_DIR, "subregions.json"),
    "utf-8",
  );
  const bySubregion = JSON.parse(raw) as Record<
    string,
    Omit<Subregion, "continent">[]
  >;
  const all: Subregion[] = Object.entries(bySubregion).flatMap(
    ([continent, subregions]) =>
      subregions.map((s) => ({ ...s, continent: continent as ContinentId })),
  );
  return continentId ? all.filter((s) => s.continent === continentId) : all;
}

export function getSubregionById(id: string): Subregion | null {
  return getSubregions().find((s) => s.id === id) ?? null;
}

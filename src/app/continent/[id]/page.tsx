import { notFound } from "next/navigation";
import {
  getContinentById,
  getCountriesByContinent,
  getSubregions,
} from "@/lib/countries";
import { ContinentView } from "@/components/ContinentView";
import type { ContinentId } from "@/lib/taxonomy";

export default async function ContinentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const continent = getContinentById(id);
  if (!continent) notFound();

  const subregions = getSubregions(id as ContinentId);
  const countries = getCountriesByContinent(id);

  return (
    <ContinentView
      continent={continent}
      subregions={subregions}
      countries={countries}
    />
  );
}

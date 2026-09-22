import {
  getAllCountries,
  getContinents,
  getCountriesByContinent,
  getCountriesBySubregion,
  getSubregions,
} from "@/lib/countries";
import { QuizView } from "@/components/QuizView";

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; subregion?: string }>;
}) {
  const { region = "", subregion = "" } = await searchParams;
  const continents = getContinents();
  const subregions = getSubregions();

  const matchingCountryCount = subregion
    ? getCountriesBySubregion(subregion).length
    : region
      ? getCountriesByContinent(region).length
      : getAllCountries().length;

  return (
    <QuizView
      continents={continents}
      subregions={subregions}
      region={region}
      subregion={subregion}
      matchingCountryCount={matchingCountryCount}
    />
  );
}

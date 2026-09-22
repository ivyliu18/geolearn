import { getContinents, listCountryIds } from "@/lib/countries";
import { HomeView } from "@/components/HomeView";

export default function HomePage() {
  const continents = getContinents();
  const availableCountryIds = listCountryIds();

  return (
    <HomeView continents={continents} availableCountryIds={availableCountryIds} />
  );
}

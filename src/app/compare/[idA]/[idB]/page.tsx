import { getCountryById } from "@/lib/countries";
import { CompareView } from "@/components/CompareView";

export default async function ComparePage({
  params,
}: {
  params: Promise<{ idA: string; idB: string }>;
}) {
  const { idA, idB } = await params;
  const countryA = getCountryById(idA);
  const countryB = getCountryById(idB);

  return (
    <CompareView idA={idA} idB={idB} countryA={countryA} countryB={countryB} />
  );
}

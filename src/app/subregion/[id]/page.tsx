import { notFound } from "next/navigation";
import { getCountriesBySubregion, getSubregionById } from "@/lib/countries";
import { SubregionView } from "@/components/SubregionView";

export default async function SubregionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const subregion = getSubregionById(id);
  if (!subregion) notFound();

  const countries = getCountriesBySubregion(id);

  return <SubregionView subregion={subregion} countries={countries} />;
}

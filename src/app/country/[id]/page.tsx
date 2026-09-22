import { notFound } from "next/navigation";
import { getCountryById, listCountryIds } from "@/lib/countries";
import { CountryView } from "@/components/CountryView";

export function generateStaticParams() {
  return listCountryIds().map((id) => ({ id }));
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = getCountryById(id);
  if (!country) notFound();

  return <CountryView country={country} />;
}

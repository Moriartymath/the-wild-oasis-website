import Cabin from "@/app/_components/CabinsList/Cabin/Cabin";
import { supabase } from "@/app/_supabase/supabase";
import { CabinType } from "@/app/_types/types";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { cabinId: string };
}) {
  const { data } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", params.cabinId)
    .select("*");
  if (!data?.length) notFound();
  return {
    title: `Cabin ${data[0].id}`,
  };
}

export async function generateStaticParams() {
  const { data } = (await supabase
    .from("cabins")
    .select("*", { count: "exact" })) as { data: CabinType[] };

  console.log(data);
  return data.map((cabin: CabinType) => {
    cabinId: `${cabin.id}`;
  });
}

async function Page({ params }: { params: { cabinId: string } }) {
  const { data } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", params.cabinId)
    .select("*");

  if (!data) redirect("/");

  return (
    <div>
      <Cabin cabin={data[0]} />
    </div>
  );
}

export default Page;

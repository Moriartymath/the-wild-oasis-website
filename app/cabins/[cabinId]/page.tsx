import Cabin from "@/app/_components/CabinsList/Cabin/Cabin";
import { supabase } from "@/app/_supabase/supabase";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { cabinId: string } }) {
  const { data } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", params.cabinId)
    .select("*");

  if (data?.length === 0) redirect("/cabins");
  console.log(params);
  return (
    <div>
      <Cabin cabin={data[0]} />
    </div>
  );
}

export default Page;

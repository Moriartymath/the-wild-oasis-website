import { supabase } from "@/app/_supabase/supabase";

export async function GET(
  request: Request,
  { params }: { params: { cabinId: string } }
) {
  try {
    const { data } = await supabase
      .from("cabins")
      .select("*")
      .eq("id", params.cabinId)
      .select("*");
    if (!data?.length)
      return Response.json({ error: "cabin not found", status: 404 });
    return Response.json({ cabin: data[0] });
  } catch (error) {
    return Response.json({ error: "Some error occured while loading cabin" });
  }
}

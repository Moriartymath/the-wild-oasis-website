import { supabase } from "@/app/_supabase/supabase";

export async function GET(request: Request) {
  try {
    const { data } = await supabase
      .from("cabins")
      .select("*", { count: "exact" });
    return Response.json({ cabins: data });
  } catch (error) {}

  return Response.json({ cabins: "Data about cabins" });
}

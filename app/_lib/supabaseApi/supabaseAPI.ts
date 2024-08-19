import { supabase } from "@/app/_supabase/supabase";

export async function getUser(email: string) {
  const { data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .select("*");
  console.log(data);
  return data;
}

export async function createUser({
  email,
  fullName,
  googleId,
}: {
  email: string;
  fullName: string;
  googleId: string;
}) {
  await supabase.from("guests").insert([{ email, fullName, googleId }]);
}

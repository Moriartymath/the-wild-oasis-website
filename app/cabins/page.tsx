import Link from "next/link";
import { supabase } from "../supabase/supabase";
import { CabinType } from "../_types/types";
import CabinsList from "../_components/CabinsList/CabinsList";

async function Page() {
  const res = await supabase.from("cabins").select("*");
  if (res.error) throw new Error("error whilte fetching ");

  const cabins = res.data as Array<CabinType>;
  return (
    <div>
      <div>
        <h1>Our Luxury Cabins</h1>
        <p>
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature's beauty in your own
          little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
      </div>
      <div>
        <CabinsList cabins={cabins} />
      </div>
    </div>
  );
}

export default Page;

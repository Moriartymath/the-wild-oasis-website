import { supabase } from "../_supabase/supabase";
import { CabinType } from "../_types/types";
import CabinsList from "../_components/CabinsList/CabinsList";
import styles from "@/app/_styles/Cabins.module.css";

export const metadata = {
  title: "Cabins",
};

async function Page() {
  const res = await supabase.from("cabins").select("*", { count: "exact" });
  if (res.error) throw new Error("error whilte fetching ");

  console.log(res.data);
  const cabins = res.data as Array<CabinType>;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Our Luxury Cabins</h1>
        <p className={styles.text}>
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature{`'`}s beauty in your own
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

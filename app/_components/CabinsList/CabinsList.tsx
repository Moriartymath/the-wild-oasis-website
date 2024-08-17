import Cabin from "./Cabin/Cabin";
import { CabinType } from "@/app/_types/types";
import styles from "./CabinsList.module.css";
import { supabase } from "@/app/_supabase/supabase";

async function CabinsList() {
  const res = await supabase.from("cabins").select("*", { count: "exact" });
  if (res.error) throw new Error("error whilte fetching ");

  console.log(res.data);
  const cabins = res.data as Array<CabinType>;

  return (
    <div className={styles.container}>
      <div>
        <h3>Sorting</h3>
      </div>
      <ul className={styles.list}>
        {cabins.map((cabin) => (
          <Cabin cabin={cabin} key={cabin.id} />
        ))}
      </ul>
    </div>
  );
}

export default CabinsList;

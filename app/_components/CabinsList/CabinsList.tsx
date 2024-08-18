import Cabin from "./Cabin/Cabin";
import { CabinType } from "@/app/_types/types";
import styles from "./CabinsList.module.css";
import { supabase } from "@/app/_supabase/supabase";
import Link from "next/link";

type CabinListProps = {
  filter: "small" | "medium" | "large" | "all";
};

async function CabinsList({ filter = "all" }: CabinListProps) {
  const res = await fetch("http://localhost:3000/api/cabins");
  const data = await res.json();
  console.log(data);
  if (data.error) throw new Error("error whilte fetching ");

  await new Promise((res, rej) => setTimeout(res, 4000));
  const cabins = data.cabins as Array<CabinType>;

  const filteredCabins =
    filter !== "all"
      ? cabins.filter((cabin) => {
          switch (filter) {
            case "large":
              return cabin.maxCapacity >= 8;
            case "medium":
              return cabin.maxCapacity >= 4 && cabin.maxCapacity < 8;
            case "small":
              return cabin.maxCapacity <= 3;
          }
        })
      : cabins;

  return (
    <div className={styles.container}>
      <div>
        {["small", "medium", "large"].map((filterMethod) => (
          <Link
            href={`?filter=${filterMethod}`}
            key={filterMethod}
            style={{
              textDecoration: "none",
              color: filter === filterMethod ? "red" : "white",
            }}
          >
            <p>{filterMethod}</p>
          </Link>
        ))}
        <div></div>
      </div>
      <ul className={styles.list}>
        {filteredCabins.map((cabin) => (
          <Cabin cabin={cabin} key={cabin.id} />
        ))}
      </ul>
    </div>
  );
}

export default CabinsList;

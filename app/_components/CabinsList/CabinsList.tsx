import Cabin from "./Cabin/Cabin";
import { CabinType } from "@/app/_types/types";
import styles from "./CabinsList.module.css";

type CabinsListProps = {
  cabins: Array<CabinType>;
};

function CabinsList({ cabins }: CabinsListProps) {
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

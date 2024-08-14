import styles from "./Cabin.module.css";

import { CabinType } from "@/app/_types/types";

type CabinProps = {
  cabin: CabinType;
};

function Cabin({ cabin }: CabinProps) {
  return (
    <li className={styles.item}>
      <div className={styles.imageContainer}>
        <img src={cabin.image} alt={cabin.name} />
      </div>
      <div className={styles.container}>
        <h3>{cabin.name}</h3>
        <p>For up to {cabin.maxCapacity} guests</p>
        <p>${cabin.regularPrice} / night</p>
        <div>
          <p>Details & reservation →</p>
        </div>
      </div>
    </li>
  );
}

export default Cabin;

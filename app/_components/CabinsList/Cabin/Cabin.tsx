import Image from "next/image";
import styles from "./Cabin.module.css";

import { CabinType } from "@/app/_types/types";
import Link from "next/link";

type CabinProps = {
  cabin: CabinType;
};

function Cabin({ cabin }: CabinProps) {
  return (
    <li className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src={cabin.image} fill alt={cabin.name} />
      </div>
      <div className={styles.container}>
        <h3>{cabin.name}</h3>
        <p>For up to {cabin.maxCapacity} guests</p>
        <p>${cabin.regularPrice} / night</p>
        <div>
          <Link href={`/cabins/${String(cabin.id)}`}>
            <p>Details & reservation →</p>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Cabin;

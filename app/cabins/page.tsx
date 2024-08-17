import CabinsList from "../_components/CabinsList/CabinsList";
import styles from "@/app/_styles/Cabins.module.css";
import { Suspense } from "react";

export const metadata = {
  title: "Cabins",
};

export const revalidate = 10;

async function Page() {
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
        <Suspense fallback={<h2>Fetching cabins, hang tight!</h2>}>
          <CabinsList />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;

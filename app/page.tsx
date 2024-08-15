import styles from "@/app/_styles/Home.module.css";
import { Stardos_Stencil } from "next/font/google";
import Image from "next/image";
import bgImage from "@/public/bg.png";

const fontHome = Stardos_Stencil({
  subsets: ["latin"],
  weight: "400",
  display: "auto",
  style: "normal",
});

export default function Home() {
  return (
    <div className={`${styles.welcomeContainer} ${fontHome.className}`}>
      <div className={styles.text}>
        <h1 className="">Welcome to paradise</h1>
      </div>
      <Image
        src={bgImage}
        fill
        placeholder="blur"
        quality={90}
        alt="bg"
        className={styles.image}
      />
    </div>
  );
}

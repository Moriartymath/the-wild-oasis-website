import Image from "next/image";
import styles from "./Logo.module.css";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href={"/"} style={{ textDecoration: "none" }}>
      <div className={styles.container}>
        <Image src={logo} height={80} alt="logo" />
        <h2>The wild oasis</h2>
      </div>
    </Link>
  );
}

export default Logo;

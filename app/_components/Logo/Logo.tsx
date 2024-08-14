import Image from "next/image";
import styles from "./Logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"} style={{ textDecoration: "none" }}>
      <div className={styles.container}>
        <Image src="/logo.png" height={48} width={48} alt="logo" />
        <h2>The wild oasis</h2>
      </div>
    </Link>
  );
}

export default Logo;

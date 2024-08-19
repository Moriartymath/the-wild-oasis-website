import Link from "next/link";
import styles from "./NavigationList.module.css";
import { signOutAction } from "@/app/_lib/actions";

type NavigationListProps = {
  list: Array<{ href: string; title: string; action?: Function }>;
  className?: string;
};

function NavigationList({ list, className }: NavigationListProps) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {list.map(({ href, title }) => (
        <li key={href} className={styles.itemContainer}>
          <Link href={href} className={styles.item}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigationList;

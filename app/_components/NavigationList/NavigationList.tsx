import Link from "next/link";
import styles from "./NavigationList.module.css";

type NavigationListProps = {
  list: Array<{ href: string; title: string }>;
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

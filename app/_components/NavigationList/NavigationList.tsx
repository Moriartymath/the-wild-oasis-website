import Link from "next/link";
import styles from "./NavigationList.module.css";

type NavigationListProps = {
  list: Array<{ href: string; title: string }>;
};

function NavigationList({ list }: NavigationListProps) {
  return (
    <ul className={styles.list}>
      {list.map(({ href, title }) => (
        <div key={href} className={styles.itemContainer}>
          <Link href={href} className={styles.item}>
            {title}
          </Link>
        </div>
      ))}
    </ul>
  );
}

export default NavigationList;

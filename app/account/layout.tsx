import NavigationList from "../_components/NavigationList/NavigationList";
import styles from "@/app/_styles/Account.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: { template: "account / %s", default: "account" },
};

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", padding: "2rem" }}>
      <NavigationList
        list={[
          { href: "/account", title: "Home" },
          { href: "/account/profile", title: "Profile" },
          { href: "/account/reservations", title: " Reservations" },
          { href: "/signout", title: " Logout" },
        ]}
        className={styles.accountList}
      />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}

export default Layout;

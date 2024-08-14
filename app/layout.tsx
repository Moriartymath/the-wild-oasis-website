import React from "react";
import NavigationList from "./_components/NavigationList/NavigationList";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo/Logo";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "First Next.js",
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <NavigationList
            list={[
              { href: "/about", title: "about" },
              { href: "/cabins", title: "Take a look at our cabins" },
              { href: "/account", title: "My account" },
            ]}
          />
        </header>
        <main className={"main"}>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;

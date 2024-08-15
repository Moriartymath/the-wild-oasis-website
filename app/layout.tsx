import React from "react";
import NavigationList from "./_components/NavigationList/NavigationList";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo/Logo";
import { Alike_Angular } from "next/font/google";

const fontMain = Alike_Angular({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: { template: "%s / Wild oasis", default: "Welcome / Wild oasis" },
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={fontMain.className}>
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

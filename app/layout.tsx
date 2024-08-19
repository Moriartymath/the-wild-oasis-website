import React from "react";
import NavigationList from "./_components/NavigationList/NavigationList";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo/Logo";
import { Alike_Angular } from "next/font/google";
import { auth } from "./_lib/auth";
import Image from "next/image";

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

async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();
  console.log(session);
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
          {session?.user?.image && session?.user?.name ? (
            <Image
              src={session?.user?.image}
              height={48}
              width={48}
              alt={session?.user?.name}
              referrerPolicy="no-referrer"
              style={{ borderRadius: "50%" }}
            />
          ) : null}
        </header>
        <main className={"main"}>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;

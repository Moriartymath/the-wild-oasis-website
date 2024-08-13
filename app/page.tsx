import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to wild oasis app!</h1>
      <ul>
        {[
          <li key={0}>
            <Link href="about">About us</Link>
          </li>,
          <li key={1}>
            <Link href="cabins">Take a look at cabins</Link>
          </li>,
          <li key={2}>
            <Link href="account">My account</Link>
          </li>,
        ]}
      </ul>
    </div>
  );
}

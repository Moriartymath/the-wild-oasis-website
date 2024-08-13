import Link from "next/link";

function Page() {
  return (
    <div>
      <Link href="/">
        <h2>Click on me</h2>
      </Link>
      <h2>Just another route</h2>
    </div>
  );
}

export default Page;

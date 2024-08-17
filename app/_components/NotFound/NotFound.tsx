"use client";

import Link from "next/link";

function NotFound() {
  return (
    <div>
      <Link href={"/cabins"}>
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default NotFound;

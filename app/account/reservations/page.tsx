import Link from "next/link";

export const metadata = {
  title: "reservations",
};

function Page() {
  return (
    <div>
      <h1>
        You have no reservations yet, checkout our
        <Link href={"/cabins"}>
          <span style={{ fontStyle: "italic" }}> luxury cabins</span>
        </Link>
      </h1>{" "}
    </div>
  );
}

export default Page;

import Image from "next/image";

function Loading() {
  return (
    <div>
      <h1>Loading...........</h1>
      <Image src="/spinner.svg" width={48} height={48} alt="Loading..." />
    </div>
  );
}

export default Loading;

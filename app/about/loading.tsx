import Image from "next/image";

function Loading() {
  return (
    <div>
      <Image
        src="/icons8-spinner.gif"
        width={500}
        height={500}
        alt="Loading..."
      />
    </div>
  );
}

export default Loading;

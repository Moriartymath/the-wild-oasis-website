"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export const metadata = {
  title: "error",
};

function Error({ error, reset }: { error: Error; reset: Function }) {
  const router = useRouter();

  function handleReload() {
    startTransition(() => {
      reset();
      router.refresh();
    });
  }
  return (
    <div>
      <h1>Error: {error.message}</h1>
      <button onClick={() => handleReload()}>try again</button>
    </div>
  );
}

export default Error;

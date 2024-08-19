import { auth } from "../_lib/auth";

async function Page() {
  const session = await auth();

  return (
    <h1>
      Welcome, {session?.user?.name} with id {session?.user.userId}
    </h1>
  );
}

export default Page;

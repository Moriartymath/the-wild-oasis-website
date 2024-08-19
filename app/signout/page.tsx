import { signOutAction } from "../_lib/actions";

function Page() {
  return (
    <div>
      Sign out from your account
      <form action={signOutAction}>
        <button>Sign out from your account</button>
      </form>
    </div>
  );
}

export default Page;

import { signInAction } from "@/app/_lib/actions";

function LoginButton() {
  return (
    <form action={signInAction}>
      <button>Sign in with google</button>
    </form>
  );
}

export default LoginButton;

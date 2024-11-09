import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { ISignInInputs } from "./SignInForm";
import { useSessionStore } from "@/store/session";
import { UserApi } from "@/shared/api/users";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const setSessionUser = useSessionStore((state) => state.setSessionUser);
  const router = useRouter();

  const onSubmit: SubmitHandler<ISignInInputs> = async (data) => {
    setIsLoading(true);

    const res = await signIn("credentials", { ...data, redirect: false });
    setIsLoading(false);
    if (res && !res.error) {
      router.push("/profile");
      const user = UserApi.getUser(data.email);
      user.then((res) => {
        const { password, ...sessionUser } = res[0];
        setSessionUser(sessionUser);
        localStorage.setItem("sessionUser", JSON.stringify(sessionUser));
      });
    } else {
      setError(true);
    }
  };

  return { onSubmit, error, isLoading };
};

export default useSignIn;

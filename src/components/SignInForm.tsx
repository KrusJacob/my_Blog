"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeError = setTimeout(() => {
      setError(false);
    }, 7000);

    return () => clearTimeout(timeError);
  }, [error]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="mt-20 flex flex-col max-w-[300px] m-auto gap-3 text-xl">
        <input name="email" required placeholder="email" className="px-2 py-1 border rounded" type="email" />
        <input
          autoComplete=""
          name="password"
          required
          placeholder="password"
          className="px-2 py-1 border rounded"
          type="password"
        />
        <button
          className="px-2 py-1 border bg-[var(--purpleColor)] text-white hover:bg-purple-600 duration-200 rounded"
          type="submit"
        >
          Login
        </button>
      </form>

      {error && <p className="text-red-700 font-bold text-xl mt-2">The data is incorrect</p>}
    </div>
  );
};

export default SignInForm;

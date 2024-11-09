"use client";
import React from "react";
import { useForm } from "react-hook-form";
import useSignIn from "./useSignIn";

export type ISignInInputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { onSubmit, isLoading, error } = useSignIn();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignInInputs>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col max-w-[300px] m-auto gap-3 text-xl">
        <input
          {...register("email", {
            required: true,
          })}
          placeholder="email"
          className="px-2 py-1 border rounded"
          type="email"
        />
        <input
          {...register("password", {
            required: true,
          })}
          autoComplete=""
          placeholder="password"
          className="px-2 py-1 border rounded"
          type="password"
        />
        <button
          disabled={isLoading}
          className="px-2 py-1 border bg-[var(--purpleColor)] text-white hover:bg-purple-600 duration-200 rounded disabled:opacity-50"
          type="submit"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>

      {error && <p className="text-red-700 font-bold text-xl mt-2">The data is incorrect</p>}
    </div>
  );
};

export default SignInForm;

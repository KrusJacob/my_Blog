"use client";
import React from "react";
import { useForm } from "react-hook-form";
import useSignIn from "./useSignIn";
import { useTranslation } from "react-i18next";
import Loader from "../UI/Loader/Loader";

export type ISignInInputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { t } = useTranslation();
  const { onSubmit, isLoading, error } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInputs>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col max-w-[300px] m-auto gap-3 text-xl">
        <input
          {...register("email", {
            required: true,
          })}
          placeholder={t("signin.form.email")}
          className="px-2 py-1 border rounded"
          type="email"
        />
        <input
          {...register("password", {
            required: true,
          })}
          autoComplete=""
          placeholder={t("signin.form.password")}
          className="px-2 py-1 border rounded"
          type="password"
        />
        <button
          disabled={isLoading}
          className="px-2 py-1 border bg-[var(--purpleColor)] text-white hover:bg-purple-600 duration-200 rounded disabled:opacity-75"
          type="submit"
        >
          {isLoading ? <Loader /> : `${t("signin.form.btn")}`}
        </button>
      </form>

      {error && (
        <div className="text-white bg-red-700 inline-block px-4 font-bold text-xl mt-4">The data is incorrect</div>
      )}
    </div>
  );
};

export default SignInForm;

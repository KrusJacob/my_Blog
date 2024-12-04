"use client";

import { useForm } from "react-hook-form";
import React from "react";
import useRegistration from "./useRegistration";
import Loader from "../UI/Loader/Loader";
import { useTranslation } from "react-i18next";

export type Inputs = {
  email: string;
  name: string;
  password: string;
  avatarUrl: string;
};

const RegistrationForm = () => {
  const { t } = useTranslation();
  const { isLoading, onSubmit } = useRegistration();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col max-w-[300px] m-auto gap-3 text-xl">
        <input
          {...register("email", {
            required: `${t("registration.form.errors.required")}`,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: `${t("registration.form.errors.email.incorrect")}`,
            },
          })}
          placeholder={t("registration.form.email")}
          className="px-2 py-1 border rounded"
          type="email"
        />
        {errors.email && <p className="text-base  text-white bg-red-700 py-1">{errors.email.message}</p>}
        <input
          maxLength={20}
          placeholder={t("registration.form.name")}
          className="px-2 py-1 border rounded"
          type="text"
          {...register("name", {
            required: `${t("registration.form.errors.required")}`,
            minLength: {
              value: 2,
              message: `${t("registration.form.errors.name.length")}`,
            },
            maxLength: {
              value: 24,
              message: `${t("registration.form.errors.name.length")}`,
            },
          })}
        />
        {errors.name && <p className="text-base text-white bg-red-700 py-1">{errors.name.message}</p>}
        <input
          {...register("password", {
            required: `${t("registration.form.errors.required")}`,
            minLength: {
              value: 4,
              message: `${t("registration.form.errors.password.length")}`,
            },
            maxLength: {
              value: 24,
              message: `${t("registration.form.errors.password.length")}`,
            },
          })}
          placeholder={t("registration.form.password")}
          className="px-2 py-1 border rounded"
          type="password"
        />
        {errors.password && <p className="text-base text-white bg-red-700 py-1">{errors.password.message}</p>}
        <input {...register("avatarUrl")} type="text" defaultValue="" hidden />
        <button
          disabled={isLoading}
          className="disabled:opacity-50 px-2 py-1 border bg-[var(--purpleColor)] text-white hover:bg-purple-600 duration-200 rounded "
          type="submit"
        >
          {isLoading ? <Loader /> : `${t("registration.form.btn")}`}
        </button>
      </form>
      <br />
    </>
  );
};

export default RegistrationForm;

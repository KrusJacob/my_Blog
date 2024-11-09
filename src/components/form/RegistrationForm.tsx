"use client";

import { useForm } from "react-hook-form";
import React from "react";
import useRegistration from "./useRegistration";

export type Inputs = {
  email: string;
  name: string;
  password: string;
  avatarUrl: string;
};

const RegistrationForm = () => {
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
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Incorrect email",
            },
          })}
          placeholder="email"
          className="px-2 py-1 border rounded"
          type="email"
        />
        {errors.email && <p className="text-base text-red-700">{errors.email.message}</p>}
        <input
          maxLength={20}
          placeholder="full name"
          className="px-2 py-1 border rounded"
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Required length name: 2-24 characters",
            },
            maxLength: {
              value: 24,
              message: "Required length password: 2-24 characters",
            },
          })}
        />
        {errors.name && <p className="text-base text-red-700">{errors.name.message}</p>}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 2,
              message: "Required length password: 2-24 characters",
            },
            maxLength: {
              value: 24,
              message: "Required length password: 2-24 characters",
            },
          })}
          placeholder="password"
          className="px-2 py-1 border rounded"
          type="password"
        />
        {errors.password && <p className="text-base text-red-700">{errors.password.message}</p>}
        <input {...register("avatarUrl")} type="text" defaultValue="" hidden />
        <button
          disabled={isLoading}
          className="disabled:opacity-50 px-2 py-1 border bg-[var(--purpleColor)] text-white hover:bg-purple-600 duration-200 rounded "
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      <br />
    </>
  );
};

export default RegistrationForm;

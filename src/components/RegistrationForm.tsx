"use client";
import { userService } from "@/services/userService";
import { IUser } from "@/types/user";
import React, { FormEvent } from "react";

const RegistrationForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      avatarUrl: "",
    };

    const allUsers = await userService.fetchUsers();
    if (allUsers.find((user: IUser) => user.email === data.email)) {
      alert("this email already registered");
    } else {
      userService.createUser(data as IUser);
      target.reset();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="mt-20 flex flex-col max-w-[300px] m-auto gap-3 text-xl">
        <input name="email" required placeholder="email" className="px-2 py-1 border rounded" type="email" />
        <input
          name="name"
          required
          maxLength={20}
          placeholder="full name"
          className="px-2 py-1 border rounded"
          type="text"
        />
        <input
          name="password"
          required
          maxLength={24}
          placeholder="password"
          className="px-2 py-1 border rounded"
          type="password"
        />
        <button
          className="px-2 py-1 border bg-[var(--purpleColor)] text-white hover:bg-purple-600 duration-200 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <br />
    </>
  );
};

export default RegistrationForm;

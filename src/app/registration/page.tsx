import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
import RegistrationForm from "@/components/RegistrationForm";
import Link from "next/link";
import { Metadata } from "next";
import { navPaths } from "@/services/paths/navPaths";

export const metadata: Metadata = {
  title: "Registration | My Blog",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <div className="w-[1000px] m-auto text-center">
      <RegistrationForm />
      <Link className="text-lg" href={navPaths.SIGNIN}>
        Back
      </Link>
    </div>
  );
};

export default page;
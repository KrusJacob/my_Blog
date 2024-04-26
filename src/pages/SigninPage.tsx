import SignInForm from "@/components/SignInForm";
import { navPaths } from "@/services/paths/navPaths";
import Link from "next/link";
import React from "react";

const SigninPage = () => {
  return (
    <div className="w-[1000px] m-auto text-center">
      <SignInForm />
      <br />
      <Link className="text-lg text-center" href={navPaths.REGISTRATION}>
        Create account
      </Link>
    </div>
  );
};

export default SigninPage;

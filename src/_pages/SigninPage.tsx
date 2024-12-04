"use client";
import SignInForm from "@/components/form/SignInForm";
import { navPaths } from "@/services/paths/navPaths";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const SigninPage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full m-auto text-center">
      <SignInForm />
      <br />
      <Link className="text-lg  text-white  text-center" href={navPaths.REGISTRATION}>
        {t("signin.create")}
      </Link>
    </div>
  );
};

export default SigninPage;

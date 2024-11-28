import React, { FormEvent } from "react";
import { signIn } from "next-auth/react";
import RegistrationForm from "@/components/form/RegistrationForm";
import Link from "next/link";
import { Metadata } from "next";
import { navPaths } from "@/services/paths/navPaths";
import { useTranslation } from "react-i18next";
import RegistrationPage from "@/_pages/RegistrationPage";

export const metadata: Metadata = {
  title: "Registration | My Blog",
  description: "Generated by create next app",
};

const page = () => {
  return <RegistrationPage />;
};

export default page;

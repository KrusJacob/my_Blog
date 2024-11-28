"use client";
import RegistrationForm from "@/components/form/RegistrationForm";
import { navPaths } from "@/services/paths/navPaths";
import { t } from "i18next";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const RegistrationPage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full m-auto text-center ">
      <RegistrationForm />
      <Link className="text-lg text-white" href={navPaths.SIGNIN}>
        {t("registration.back")}
      </Link>
    </div>
  );
};

export default RegistrationPage;

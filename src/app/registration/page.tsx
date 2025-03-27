import React, { FormEvent } from "react";
import { Metadata } from "next";
import RegistrationPage from "@/_pages/RegistrationPage";

export const metadata: Metadata = {
  title: "Registration | My Blog",
};

const page = () => {
  return <RegistrationPage />;
};

export default page;

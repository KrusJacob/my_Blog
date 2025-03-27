import React from "react";
import SigninPage from "@/_pages/SigninPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin | My Blog",
};

const page = () => {
  return (
    <>
      <SigninPage />
    </>
  );
};

export default page;

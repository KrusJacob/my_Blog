import RatingPage from "@/pages/RatingPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rating | My Blog",
  description: "Generated by create next app",
};

const page = async () => {
  return <RatingPage />;
};

export default page;
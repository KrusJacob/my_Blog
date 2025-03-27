import RatingPage from "@/_pages/RatingPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rating | My Blog",
};

const page = async () => {
  return <RatingPage />;
};

export default page;

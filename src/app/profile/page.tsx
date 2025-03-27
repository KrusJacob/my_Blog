import ProfilePage from "@/_pages/ProfilePage";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Profile | My Blog",
  description: "Here, you can share your thoughts, ideas, and stories with the world",
};

const page = async () => {
  return (
    <>
      <ProfilePage />
    </>
  );
};

export default page;

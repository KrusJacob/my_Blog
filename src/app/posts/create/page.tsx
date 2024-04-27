import PostForm from "@/components/post/PostForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts | Create Post",
  description: "Generated by create next app",
};

const page = () => {
  return <PostForm />;
};

export default page;

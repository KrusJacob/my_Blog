"use client";

import React from "react";
import Skeleton from "@/components/UI/Skeleton/Skeleton";
import { PostsApi } from "@/shared/api/posts";
import { useSessionStore } from "@/store/session";
import PostPage from "@/components/post/page/PostPage";
import { useQuery } from "@tanstack/react-query";

const SinglePostPage = ({ id }: { id: string }) => {
  const sessionUser = useSessionStore((state) => state.sessionUser);
  const { data: post, isLoading, refetch } = useQuery({ ...PostsApi.getPostByID(id) });

  if (!post) {
    return <Skeleton />;
  }

  return <PostPage sessionUser={sessionUser} post={post} />;
};

export default SinglePostPage;

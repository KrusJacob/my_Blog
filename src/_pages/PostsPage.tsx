"use client";
import PostList from "@/components/post/list/PostList";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import PostAllFilters from "@/components/post/filters/PostAllFilters";
import PostsWrapper from "@/components/post/PostsWrapper";
import { PostsApi } from "@/shared/api/posts";
import routerService from "@/services/router/routerService";

const PostsPage = () => {
  const { goToCreatePost } = routerService();

  const { data: posts = [], refetch, isLoading } = useQuery({ ...PostsApi.getPostListQueryOptions() });

  return (
    <PostsWrapper onCreate={goToCreatePost} refetch={refetch}>
      <PostAllFilters />
      <PostList posts={posts} isLoading={isLoading} />
    </PostsWrapper>
  );
};

export default PostsPage;

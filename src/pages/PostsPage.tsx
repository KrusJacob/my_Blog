"use client";
import PostList from "@/components/post/PostList";
import { postService } from "@/services/postService";
import { useRouter } from "next/navigation";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { navPaths } from "@/services/paths/navPaths";
import PostFilters from "@/components/post/filters/PostFilters";
import PostsWrapper from "@/components/post/PostsWrapper";

const PostsPage = () => {
  const router = useRouter();

  const { data: posts = [], refetch } = useQuery({ queryKey: ["posts"], queryFn: () => postService.fetchPosts() });

  const onCreate = () => {
    router.push(`${navPaths.POSTS}/create`);
  };

  return (
    <>
      <PostsWrapper onCreate={onCreate} refetch={refetch}>
        <div className="mt-2  bg-slate-200 bg-opacity-70 shadow-md shadow-slate-400  ">
          <PostFilters />
          <PostList posts={posts} />
        </div>
      </PostsWrapper>
    </>
  );
};

export default PostsPage;

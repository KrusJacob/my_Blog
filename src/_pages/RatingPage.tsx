"use client";
import RatingList from "@/components/rating/RatingList";
import { PostsApi } from "@/shared/api/posts";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const RatingPage = () => {
  const { data: posts, isLoading } = useQuery({
    ...PostsApi.getPostListQueryOptions(),
  });

  return (
    <div className="text-center">
      <div className="w-full px-2 py-2 bg-[var(--purpleColor)] rounded-tr-3xl rounded-tl-3xl ">
        <h2 className="text-white text-center text-3xl ">Rating</h2>
      </div>
      {posts && <RatingList posts={posts} isLoading={isLoading} />}
    </div>
  );
};

export default RatingPage;

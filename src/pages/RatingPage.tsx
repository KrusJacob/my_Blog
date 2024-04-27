"use client";
import RatingList from "@/components/rating/RatingList";
import { postService } from "@/services/postService";
import { IPost } from "@/types/post";
// import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const RatingPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  // const { data: posts, isLoading } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => postService.fetchPosts(),
  // });

  useEffect(() => {
    postService.fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="text-center">
      <div className="w-full px-4 py-4 bg-[var(--purpleColor)] rounded-tr-3xl rounded-tl-3xl ">
        <h2 className="text-white text-center text-3xl ">Rating</h2>
      </div>
      {posts && <RatingList posts={posts} />}
    </div>
  );
};

export default RatingPage;

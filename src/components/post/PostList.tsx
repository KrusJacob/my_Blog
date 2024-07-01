import { AnimatePresence } from "framer-motion";
import { useFilter } from "@/hooks/useFilter";
import { useStore } from "@/store/store";
import { IPost } from "@/types/post";
import React from "react";

import PostItem from "./PostItem";
import Loader from "../UI/Loader/Loader";

const PostList = ({ posts, isLoading }: { posts: IPost[]; isLoading: boolean }) => {
  const search = useStore((state) => state.search);
  const filter = useStore((state) => state.filter);
  const sort = useStore((state) => state.sort);

  const filteredPosts = useFilter(posts, search, filter, sort);

  return (
    <div className="border flex flex-col gap-2 min-h-[600px] max-h-[800px] overflow-y-auto px-2 py-2">
      {isLoading && <Loader />}
      <AnimatePresence>
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostList;

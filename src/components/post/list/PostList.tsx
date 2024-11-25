import { AnimatePresence } from "framer-motion";
import { useFilter } from "@/hooks/useFilter";
import { useStore } from "@/store/store";
import { IPost } from "@/types/post";
import React, { useMemo } from "react";
import PostItem from "../item/PostItem";
import Loader from "../../UI/Loader/Loader";
import routerService from "@/services/router/routerService";
import { useSessionStore } from "@/store/session";

const PostList = ({ posts, isLoading }: { posts: IPost[]; isLoading: boolean }) => {
  const search = useStore((state) => state.search);
  const filter = useStore((state) => state.filter);
  const sort = useStore((state) => state.sort);
  const userId = useSessionStore((state) => state.sessionUser?.id);
  const { goToPostById } = routerService();

  const filteredPosts = useMemo(
    () => useFilter(posts, search, filter, sort, userId),
    [posts, search, filter, sort, userId]
  );

  return (
    <div className="flex flex-col gap-2 h-[600px] overflow-y-auto px-2 py-2 bg-white bg-opacity-60 backdrop-blur-md">
      {isLoading && <Loader />}
      <AnimatePresence>
        {filteredPosts.map((post) => (
          <PostItem onClick={goToPostById} key={post.id} post={post} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostList;

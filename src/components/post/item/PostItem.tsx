import React from "react";
import { motion } from "framer-motion";
import { IPost } from "@/types/post";
import { useRouter } from "next/navigation";
import { navPaths } from "@/services/paths/navPaths";
import PostItemInfo from "./PostItemInfo";

const PostItem = ({ post, onClick }: { post: IPost; onClick: (id: number) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.8 }}
      onClick={() => onClick(post.id!)}
      className="border-2 border-[var(--purpleColor)] text-[var(--purpleColor)] py-1 px-3 md:px-6  flex bg-slate-50 rounded justify-between items-center cursor-pointer group : hover:bg-[var(--purpleColor)] hover:text-white duration-200"
    >
      <p className="font-semibold group-hover:translate-x-3 text-base md:text-2xl duration-300">{post.title}</p>
      <PostItemInfo post={post} />
    </motion.div>
  );
};

export default PostItem;

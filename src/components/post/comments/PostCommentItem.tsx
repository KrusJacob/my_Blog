import React from "react";
import { motion } from "framer-motion";
import { IComment } from "@/types/post";
import PostCommentInfo from "./PostCommentInfo";

interface Props {
  comment: IComment;
  isUserAuthor: boolean;
  onDeleteComment: (id: number) => void;
  getIsPending: (id: number) => boolean;
}

const PostCommentItem = (props: Props) => {
  const { comment } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400, transition: { duration: 0.4, ease: "backInOut" } }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      key={comment.id}
      className="rounded border border-slate-400 rounded-tl-3xl bg-white shadow-md shadow-slate-400  bg-opacity-60"
    >
      <PostCommentInfo {...props} />
      <p className="p-5 text-xl">{comment.text}</p>
    </motion.div>
  );
};

export default PostCommentItem;

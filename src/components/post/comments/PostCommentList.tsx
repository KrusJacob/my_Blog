import { AnimatePresence } from "framer-motion";

import { IComment, IPost } from "@/types/post";
import React from "react";

import PostCommentItem from "./PostCommentItem";
import { ISessionUser } from "@/store/session";
import useDeleteComment from "./useDeleteComment";

interface Props {
  post: IPost;
  user: ISessionUser | null;
}

const PostCommentList = ({ post, user }: Props) => {
  const { handleDelete, getIsPending } = useDeleteComment();

  const onDeleteComment = (commentId: number) => {
    handleDelete(post, commentId);
  };

  return (
    <>
      {post.comments && post.comments?.length !== 0 && (
        <div className="mt-8">
          <div className="bg-[var(--purpleColor)] text-white p-2 rounded-tr-3xl rounded-tl-3xl rounded">
            <h4 className="text-2xl text-center">Comments</h4>
          </div>
          <div className="py-2 rounded flex flex-col gap-3   max-h-[800px] overflow-hidden overflow-y-auto ">
            <AnimatePresence>
              {post.comments.map((item, i) => (
                <PostCommentItem
                  comment={item}
                  key={item.id}
                  isUserAuthor={user?.id === item.userId}
                  onDeleteComment={onDeleteComment}
                  getIsPending={getIsPending}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCommentList;

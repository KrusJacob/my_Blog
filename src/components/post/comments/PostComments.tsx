import { AnimatePresence } from "framer-motion";
import { postService } from "@/services/postService";
import { IComment } from "@/types/post";
import React from "react";

import PostCommentItem from "./PostCommentItem";

const PostComments = ({
  comments,
  userName,
  postId,
  refetch,
}: {
  comments: IComment[];
  userName: string | null | undefined;
  postId: string;
  refetch: () => void;
}) => {
  const onDeleteComment = (commentID: number) => {
    const newComments = comments.filter((item) => item.id !== commentID);
    postService.deleteComment(postId, newComments).then(() => refetch());
  };

  return (
    <>
      {comments && comments?.length !== 0 && (
        <div className="mt-8">
          <div className="bg-[var(--purpleColor)] text-white p-2 rounded-tr-3xl rounded-tl-3xl rounded">
            <h4 className="text-2xl text-center">Comments</h4>
          </div>
          <div className="py-2 rounded flex flex-col gap-3   max-h-[800px] overflow-hidden overflow-y-auto ">
            <AnimatePresence>
              {comments.map((item, i) => (
                <PostCommentItem
                  item={item}
                  key={item.id}
                  isUserAuthor={userName === item.author}
                  onDeleteComment={onDeleteComment}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
};

export default PostComments;

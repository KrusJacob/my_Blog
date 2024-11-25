import { images } from "@/assets";
import { IComment } from "@/types/post";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  comment: IComment;
  isUserAuthor: boolean;
  onDeleteComment: (id: number) => void;
  getIsPending: (id: number) => boolean;
}

const PostCommentInfo = ({ comment, isUserAuthor, onDeleteComment, getIsPending }: Props) => {
  const onDelete = () => {
    onDeleteComment(comment.id);
  };

  return (
    <div
      className={`bg-slate-200 flex justify-between items-center text-sm md:text-lg rounded rounded-tl-3xl font-medium border-b-[1px]  text-[var(--purpleColor)] py-1 pl-4 pr-2`}
    >
      <div className="flex gap-4 items-center">
        <img src={images.avatarDefault.src} className="h-10 w-10" alt="" />
        <p className={`${isUserAuthor ? "bg-[var(--purpleColor)] text-white px-2 rounded" : " "}`}>
          {comment.author}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <p>{comment.date}</p>
        {isUserAuthor && (
          <button
            disabled={getIsPending(comment.id)}
            onClick={onDelete}
            title="delete comment"
            className="bg-red-700 rounded disabled:bg-opacity-40"
          >
            <MdDeleteForever className="text-white text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCommentInfo;

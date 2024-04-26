import { IComment } from "@/types/post";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  item: IComment;
  isUserAuthor: boolean;
  onDeleteComment: (id: number) => void;
}

const PostCommentInfo = ({ item, isUserAuthor, onDeleteComment }: Props) => {
  return (
    <div
      className={`${
        isUserAuthor ? " bg-slate-200" : "bg-slate-100"
      } flex justify-between text-lg rounded-tl-3xl font-medium  text-purple-800 py-1 pl-4 pr-1`}
    >
      <p>{item.author}:</p>
      <div className="flex items-center gap-4">
        <p>{item.date}</p>
        {isUserAuthor && (
          <button onClick={() => onDeleteComment(item.id)} title="delete comment" className="bg-red-700 rounded">
            <MdDeleteForever className="text-white text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCommentInfo;

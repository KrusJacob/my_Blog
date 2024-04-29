import { useTransformationDate } from "@/hooks/useTransformateDate";
import { IPost } from "@/types/post";
import React from "react";
import { FcLike } from "react-icons/fc";
import { IoChatboxSharp } from "react-icons/io5";

interface Props {
  post: IPost;
}

const PostItemInfo = ({ post }: Props) => {
  return (
    <div className="text-base md:text-lg text-end">
      <p>{useTransformationDate(post.date)}</p>
      <div className="flex flex-col md:flex-row md:gap-4 justify-between">
        <p className="text-end text-sm md:text-base">{post.author}</p>
        <div className="flex gap-2 justify-end">
          <div className="flex gap-1 items-center text-lg">
            <span>{post.likes?.value || 0}</span>
            <FcLike className="opacity-80" />
          </div>
          <div className="flex gap-1 items-center text-lg">
            <span>{post.comments.length}</span>
            <IoChatboxSharp className="opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItemInfo;

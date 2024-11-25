import { useTransformationDate } from "@/hooks/useTransformateDate";

import { ISessionUser } from "@/store/session";
import { IPost } from "@/types/post";
import { UrlInText } from "@/utils/hocs/UrlInText";
import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import useLikePost from "./useLikePost";
import toast from "react-hot-toast";

interface Props {
  post: IPost;
  sessionUser: ISessionUser | null;
}

const SinglePostBody = ({ post, sessionUser }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const { handleLike } = useLikePost();

  useEffect(() => {
    setIsLiked(post.likes.email.includes(sessionUser?.email!) || false);
  }, [post]);

  const onLike = () => {
    if (sessionUser) {
      handleLike(post, sessionUser, isLiked);
    } else {
      toast("You need to login");
    }
  };

  return (
    <div className="flex flex-col gap-10 backdrop-blur-md  bg-white bg-opacity-60 p-4 rounded-xl">
      <h3 className="text-center text-2xl md:text-5xl">{post.title}</h3>
      <p className="text-base md:text-2xl break-words whitespace-pre-wrap min-h-[200px]">{UrlInText(post.body)}</p>
      <div className="flex justify-between items-center text-sm md:text-xl">
        <p className="text-end">Author: {post.author}</p>
        <div className="flex gap-1 items-center text-xl md:text-2xl">
          <span className="translate-y-1">{post.likes.value || 0}</span>
          <button onClick={onLike} title={`${isLiked ? "You liked it" : "like"}`}>
            <FcLike
              className={`${
                isLiked ? "" : "grayscale opacity-75"
              } text-3xl cursor-pointer  hover:scale-125 duration-300`}
            />
          </button>
        </div>

        <p>{useTransformationDate(post.date)}</p>
      </div>
    </div>
  );
};

export default SinglePostBody;

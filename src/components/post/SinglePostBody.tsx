import { useTransformationDate } from "@/hooks/useTransformateDate";
import { postService } from "@/services/postService";
import { IPost } from "@/types/post";
import { UrlInText } from "@/utils/hocs/UrlInText";
import { Session } from "next-auth";
import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";

interface Props {
  post: IPost;
  session: Session | null;
  refetch: () => void;
  id: string;
}

const SinglePostBody = ({ post, session, refetch, id }: Props) => {
  const [likesValue, setLikesValue] = useState<number | undefined>(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setLikesValue(post.likes?.value);
    setIsLiked(post.likes?.email.includes(session?.user?.email!) || false);
  }, [post]);

  const changeLikes = () => {
    if (isLiked) {
      const newLikesValue = likesValue! - 1;
      const newLikesEmail = post.likes?.email.filter((item) => item !== session?.user?.email) || [];
      postService.changeLikes(id, newLikesValue, newLikesEmail).then(() => refetch());
    } else {
      const newLikesValue = likesValue! + 1;
      let newLikesEmail = [...(post.likes?.email || [])];
      newLikesEmail.push(session?.user?.email!);
      postService.changeLikes(id, newLikesValue, newLikesEmail).then(() => refetch());
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-center text-2xl md:text-5xl">{post.title}</h3>
      <p
        className="text-base md:text-2xl break-words whitespace-pre-wrap"
        // dangerouslySetInnerHTML={{ __html: сheckTextForLinks(post.body) }}
      >
        {UrlInText(post.body)}
      </p>
      <div className="flex justify-between items-center text-sm md:text-xl">
        <p className="text-end">Author: {post.author}</p>
        <div className="flex gap-1 items-center text-xl md:text-2xl">
          <span>{likesValue || 0}</span>
          <button disabled={!session} onClick={changeLikes} title={`${isLiked ? "You liked it" : "like"}`}>
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

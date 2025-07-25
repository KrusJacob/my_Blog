import { IPost } from "@/types/post";
import React from "react";
import RatingItem from "./RatingItem";
import { FcLike } from "react-icons/fc";

const RatingListByLikes = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className="px-4 py-2 bg-slate-200 bg-opacity-70 shadow-md shadow-slate-400">
      {posts.map((item, i) => {
        const place = i + 1;
        if (i >= 10) {
          return;
        }

        return (
          <RatingItem
            postId={item.id}
            key={i}
            item={item.title}
            place={place}
            value={
              <>
                {item.likes.value}
                <FcLike className="opacity-80" />
              </>
            }
          />
        );
      })}
    </div>
  );
};

export default RatingListByLikes;

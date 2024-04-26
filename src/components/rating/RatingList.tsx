"use client";
import { FilterByLikes } from "@/utils/rating_FilterByLikes";
import { FilterByPost } from "@/utils/rating_FilterByPost";

import React, { useState } from "react";
import RatingListByLikes from "./RatingListByLikes";
import RatingListByValue from "./RatingListByValue";
import { IPost } from "@/types/post";

type SelectType = "author" | "post";

interface Props {
  posts: IPost[];
}

const RatingList = ({ posts }: Props) => {
  const [select, setSelect] = useState<SelectType>("author");

  const PostsSortedByValue = FilterByPost(posts);
  const PostsSortedByLikes = FilterByLikes(posts);

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value as SelectType);
  };

  return (
    <div className="flex flex-col gap-2 mt-2 text-xl">
      <div className="bg-slate-200  px-2 py-1 rounded flex justify-center items-center gap-2 ">
        <p>Rating by: </p>
        <select onChange={onChangeSort} className="px-2 py-1 h-full border-black rounded">
          <option>author</option>
          <option>post</option>
        </select>
      </div>
      {select === "author" && <RatingListByValue posts={PostsSortedByValue} />}
      {select === "post" && <RatingListByLikes posts={PostsSortedByLikes} />}
    </div>
  );
};

export default RatingList;

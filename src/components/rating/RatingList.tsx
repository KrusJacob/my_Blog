"use client";
import { FilterByLikes } from "@/utils/rating_FilterByLikes";
import { FilterByPost } from "@/utils/rating_FilterByPost";
import React, { useState } from "react";
import RatingListByLikes from "./RatingListByLikes";
import RatingListByValue from "./RatingListByValue";
import { IPost, SelectType } from "@/types/post";
import Loader from "../UI/Loader/Loader";
import RaitngSelect from "./RaitngSelect";

interface Props {
  posts: IPost[];
  isLoading: boolean;
}

const RatingList = ({ posts, isLoading }: Props) => {
  const [select, setSelect] = useState<SelectType>("authors");

  const PostsSortedByValue = FilterByPost(posts);
  const PostsSortedByLikes = FilterByLikes(posts);

  return (
    <div className="flex flex-col gap-2 mt-2 text-xl">
      <RaitngSelect select={select} setSelect={setSelect} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {select === "authors" && <RatingListByValue authors={PostsSortedByValue} />}
          {select === "liked posts" && <RatingListByLikes posts={PostsSortedByLikes} />}
        </>
      )}
    </div>
  );
};

export default RatingList;

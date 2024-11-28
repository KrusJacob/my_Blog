"use client";
import { FilterByLikes } from "@/utils/rating_FilterByLikes";
import { FilterByPost } from "@/utils/rating_FilterByPost";
import React, { useState } from "react";
import RatingListByLikes from "./RatingListByLikes";
import RatingListByValue from "./RatingListByValue";
import { IPost, SelectType } from "@/types/post";
import Loader from "../UI/Loader/Loader";
import RaitngSelect from "./RaitngSelect";
import RatingList from "./RatingList";

interface Props {
  posts: IPost[];
}

const RatingWrapper = ({ posts }: Props) => {
  const [select, setSelect] = useState<SelectType>("authors");

  return (
    <div className="flex flex-col gap-2 mt-2 text-xl">
      <RaitngSelect select={select} setSelect={setSelect} />
      <RatingList posts={posts} type={select} />
    </div>
  );
};

export default RatingWrapper;

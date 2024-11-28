"use client";
import { FilterByLikes } from "@/utils/rating_FilterByLikes";
import { FilterByPost } from "@/utils/rating_FilterByPost";
import React, { useState } from "react";
import RatingListByLikes from "./RatingListByLikes";
import RatingListByValue from "./RatingListByValue";
import { IPost, SelectType } from "@/types/post";

interface Props {
  posts: IPost[];
  type: SelectType;
}

const RatingList = ({ posts, type }: Props) => {
  console.log(type);
  if (type === "authors") {
    const postsSortedByValue = FilterByPost(posts);
    return <RatingListByValue authors={postsSortedByValue} />;
  }
  if (type === "liked posts") {
    const postsSortedByLikes = FilterByLikes(posts);
    console.log(postsSortedByLikes, posts);
    return <RatingListByLikes posts={postsSortedByLikes} />;
  }

  return null;
};

export default RatingList;

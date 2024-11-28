"use client";
import Loader from "@/components/UI/Loader/Loader";
import RatingWrapper from "@/components/rating/RatingWrapper";
import { PostsApi } from "@/shared/api/posts";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";

const RatingPage = () => {
  const { t } = useTranslation();
  const { data: posts, isLoading } = useQuery({
    ...PostsApi.getPostListQueryOptions(),
  });

  return (
    <div className="text-center">
      <div className="w-full px-2 py-2 mb-2 bg-[var(--purpleColor)] rounded-tr-3xl rounded-tl-3xl ">
        <h2 className="text-white text-center text-3xl ">{t("rating.title")}</h2>
      </div>
      {isLoading && <Loader />}
      {posts && <RatingWrapper posts={posts} />}
    </div>
  );
};

export default RatingPage;

import { useStore } from "@/store/store";
import React from "react";
import { SortType } from "@/store/store";
import { useTranslation } from "react-i18next";

const PostSort = () => {
  const changeSort = useStore((state) => state.changeSort);
  const { t } = useTranslation();

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSort(e.target.value as SortType);
  };

  return (
    <>
      <p className="ml-2">{t("posts.filters.sort.title")}</p>
      <select onChange={onChangeSort} className="px-2 py-1 h-full border-black rounded  text-black">
        <option value={"new"}>{t("posts.filters.sort.new")}</option>
        <option value={"old"}>{t("posts.filters.sort.old")}</option>
        <option value={"likes"}>{t("posts.filters.sort.likes")}</option>
      </select>
    </>
  );
};

export default PostSort;

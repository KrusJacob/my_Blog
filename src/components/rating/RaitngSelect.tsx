import { SelectType } from "@/types/post";
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setSelect: (select: SelectType) => void;
  select: SelectType;
}

const RaitngSelect = ({ setSelect, select }: Props) => {
  const { t } = useTranslation();
  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value as SelectType);
  };

  return (
    <div className="bg-slate-200  px-2 py-1 rounded flex justify-center items-center gap-2 ">
      <p>{t("rating.filter.title")}</p>
      <select value={select} onChange={onChangeSort} className="px-2 py-1 h-full border-black rounded">
        <option value="authors">{t("rating.filter.authors")}</option>
        <option value="liked posts">{t("rating.filter.liked_post")}</option>
      </select>
    </div>
  );
};

export default RaitngSelect;

import { type } from "os";
import React from "react";
import RatingItem from "./RatingItem";
import { useTranslation } from "react-i18next";

type Author = {
  author: string;
  value: number;
};

const RatingListByValue = ({ authors }: { authors: Author[] }) => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-2 bg-slate-200 bg-opacity-70 shadow-md shadow-slate-400">
      {authors.map((item, i) => {
        const place = i + 1;
        if (i >= 5) {
          return;
        }

        return (
          <RatingItem key={i} type={t("rating.item.descr")} item={item.author} place={place} value={item.value} />
        );
      })}
    </div>
  );
};

export default RatingListByValue;

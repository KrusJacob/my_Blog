import { SelectType } from "@/types/post";
import React from "react";

interface Props {
  setSelect: (select: SelectType) => void;
  select: SelectType;
}

const RaitngSelect = ({ setSelect, select }: Props) => {
  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value as SelectType);
  };

  return (
    <div className="bg-slate-200  px-2 py-1 rounded flex justify-center items-center gap-2 ">
      <p>Rating by: </p>
      <select value={select} onChange={onChangeSort} className="px-2 py-1 h-full border-black rounded">
        <option>authors</option>
        <option>liked posts</option>
      </select>
    </div>
  );
};

export default RaitngSelect;

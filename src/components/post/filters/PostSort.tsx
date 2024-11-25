import { useStore } from "@/store/store";
import React from "react";
import { SortType } from "@/store/store";

const PostSort = () => {
  const changeSort = useStore((state) => state.changeSort);

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSort(e.target.value as SortType);
  };

  return (
    <>
      <p className="ml-2">Sort by:</p>
      <select onChange={onChangeSort} className="px-2 py-1 h-full border-black rounded  text-black">
        <option value={"new"}>new</option>
        <option value={"old"}>old</option>
        <option value={"likes"}>likes</option>
      </select>
    </>
  );
};

export default PostSort;

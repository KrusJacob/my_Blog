import { useStore } from "@/store/store";
import React from "react";
import { SortType } from "@/store/store";

const PostSort = () => {
  const activeFilter = useStore((state) => state.filter);
  const changeFilter = useStore((state) => state.changeFilter);
  const changeSort = useStore((state) => state.changeSort);

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSort(e.target.value as SortType);
  };

  return (
    <div className="flex gap-2 text-lg items-center justify-center">
      <p>Filter by:</p>
      <button
        onClick={() => changeFilter("all")}
        className={`${
          activeFilter === "all" ? "bg-[var(--purpleColor)] text-white" : "bg-white"
        } px-2 py-1 border border-black rounded  duration-200 hover:text-bg-[var(--purpleColor)]`}
      >
        All
      </button>
      <button
        onClick={() => changeFilter("likes")}
        className={`${
          activeFilter === "likes" ? "bg-[var(--purpleColor)] text-white" : "bg-white"
        } px-2 py-1 border border-black rounded  duration-200 hover:text-bg-[var(--purpleColor)]`}
      >
        Likes
      </button>
      <p className="ml-2">Sort by:</p>
      <select onChange={onChangeSort} className="px-2 py-1 h-full border-black rounded">
        <option value={"new"}>new</option>
        <option value={"old"}>old</option>
      </select>
    </div>
  );
};

export default PostSort;

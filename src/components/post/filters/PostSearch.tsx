"use client";
import useDebounce from "@/hooks/useDebounce";
import { useStore } from "@/store/store";
import React, { useEffect, useState } from "react";

const PostSearch = () => {
  const [search, setSearch] = useState<string>("");
  const debounced = useDebounce(search);
  const changeSearch = useStore((state) => state.changeSearch);

  useEffect(() => {
    changeSearch(debounced);
  }, [debounced]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      value={search}
      onChange={onChangeSearch}
      placeholder="search post..."
      className="px-2 py-1 border text-lg rounded w-full md:w-1/2"
      type="text"
    />
  );
};

export default PostSearch;

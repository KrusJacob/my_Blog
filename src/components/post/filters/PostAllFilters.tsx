import React from "react";
import PostSearch from "./PostSearch";
import PostSort from "./PostSort";
import PostFilter from "./PostFilter";

const PostAllFilters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 border border-b-slate-300 px-4 py-2">
      <PostSearch />
      <div className="flex gap-2 text-base md:text-lg items-center justify-center">
        <PostFilter />
        <PostSort />
      </div>
    </div>
  );
};

export default PostAllFilters;

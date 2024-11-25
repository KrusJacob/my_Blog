import React from "react";
import PostSearch from "./PostSearch";
import PostSort from "./PostSort";
import PostFilter from "./PostFilter";

const PostAllFilters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2  py-2">
      <PostSearch />
      <div className="flex gap-2 text-base md:text-lg text-white items-center  justify-center">
        <PostFilter />
        <PostSort />
      </div>
    </div>
  );
};

export default PostAllFilters;

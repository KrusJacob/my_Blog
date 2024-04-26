import React from "react";
import PostSearch from "./PostSearch";
import PostSort from "./PostSort";

const PostFilters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 border border-b-slate-300 px-4 py-2">
      <PostSearch />
      <PostSort />
    </div>
  );
};

export default PostFilters;

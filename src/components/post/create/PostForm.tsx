"use client";

import React from "react";
import Button from "../../UI/Button/Button";
import useCreatePost from "./useCreatePost";

const PostForm = () => {
  const { handleCreate, isLoading } = useCreatePost();

  return (
    <div>
      <h3 className="text-3xl text-[var(--purpleColor)] font-bold">New post</h3>
      <form action={handleCreate} className="grid gap-3 text-xl mt-6">
        <input
          name="title"
          placeholder="title"
          className="border px-3 py-2 w-full bg-slate-100 rounded"
          type="text"
          required
          maxLength={32}
        />
        <textarea
          name="body"
          placeholder="content"
          className="border px-3 py-2 w-full bg-slate-100 rounded min-h-[300px] max-h-[580px]"
          required
          maxLength={5000}
        />
        <div>
          <Button disabled={isLoading} rounded="left">
            Add post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;

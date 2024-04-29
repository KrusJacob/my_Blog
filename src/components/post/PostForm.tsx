"use client";
import { getSession } from "next-auth/react";
import { postService } from "@/services/postService";
import { IPost, IComment } from "@/types/post";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { navPaths } from "@/services/paths/navPaths";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";

const likes = {
  value: 0,
  email: [],
};

const comments = [] as IComment[];

const PostForm = () => {
  const [isPosting, setIsPosting] = useState(false);
  const router = useRouter();
  // const mutation = useMutation({
  //   mutationFn: (newPost: IPost) => {
  //     return postService.createPost(newPost);
  //   },
  //   mutationKey: ["posts"],
  // });

  const onCreatePost = async (data: FormData) => {
    setIsPosting(true);
    const session = await getSession();

    const { title, body } = Object.fromEntries(data);
    const date = new Date();
    const author = session?.user?.name || "unknown";
    const newPost = { title, body, author, comments, likes, date } as IPost;

    // mutation.mutate(newPost);
    postService.createPost(newPost).finally(() => router.push(`${navPaths.POSTS}`));
    // redirect(`${navPaths.POSTS}/`);
  };

  return (
    <div>
      <h3 className="text-3xl text-[var(--purpleColor)] font-bold">New post</h3>
      <form action={onCreatePost} className="grid gap-3 text-xl mt-6">
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
          <Button disabled={isPosting} rounded="left">
            Add post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;

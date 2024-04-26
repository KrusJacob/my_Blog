"use client";
import { postService } from "@/services/postService";
import { IPost } from "@/types/post";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import PostComments from "@/components/post/comments/PostComments";
import PostCommentsForm from "@/components/post/PostCommentsForm";
import NotFound from "@/app/not-found";
import { navPaths } from "@/services/paths/navPaths";
import SinglePostBody from "@/components/post/SinglePostBody";
import SinglePostButtons from "@/components/post/SinglePostButtons";

const SinglePostPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const {
    data: post,
    isLoading,
    refetch,
  } = useQuery<IPost>({
    queryKey: ["post", id],
    queryFn: () => postService.getPostByID(id),
  });

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return postService.deletePost(id);
    },
    mutationKey: ["posts"],
  });

  const onDeletePost = () => {
    mutation.mutate(id);
    router.push(`${navPaths.POSTS}`);
  };
  const onBackToPosts = () => {
    router.push(`${navPaths.POSTS}`);
  };

  if (!post && !isLoading) {
    return <NotFound />;
  }

  return (
    <>
      {post && <SinglePostBody id={id} post={post} refetch={refetch} session={session} />}
      <SinglePostButtons
        isUserAuthor={session?.user?.name === post?.author}
        onBackToPosts={onBackToPosts}
        onDeletePost={onDeletePost}
      />
      <PostCommentsForm userName={session?.user?.name!} postId={id} comments={post?.comments!} refetch={refetch} />
      <PostComments comments={post?.comments!} userName={session?.user?.name} postId={id} refetch={refetch} />
    </>
  );
};

export default SinglePostPage;

"use client";
import { postService } from "@/services/postService";
import { IPost } from "@/types/post";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { useMutation, useQuery } from "@tanstack/react-query";
import PostComments from "@/components/post/comments/PostComments";
import PostCommentsForm from "@/components/post/PostCommentsForm";
import NotFound from "@/app/not-found";
import { navPaths } from "@/services/paths/navPaths";
import SinglePostBody from "@/components/post/SinglePostBody";
import SinglePostButtons from "@/components/post/SinglePostButtons";

const SinglePostPage = ({ id }: { id: string }) => {
  const [post, setPost] = useState<IPost>();
  const router = useRouter();
  const session = useSession();

  // const {
  //   data: post,
  //   isLoading,
  //   refetch,
  // } = useQuery<IPost>({
  //   queryKey: ["post", id],
  //   queryFn: () => postService.getPostByID(id),
  // });

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = () => {
    postService.getPostByID(id).then((data) => {
      setPost(data);
    });
  };

  // const mutation = useMutation({
  //   mutationFn: (id: string) => {
  //     return postService.deletePost(id);
  //   },
  //   mutationKey: ["posts"],
  // });

  const onDeletePost = () => {
    // mutation.mutate(id);
    postService.deletePost(id);
    router.push(`${navPaths.POSTS}`);
  };
  const onBackToPosts = () => {
    router.push(`${navPaths.POSTS}`);
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      {post && <SinglePostBody id={id} post={post} refetch={fetchPost} session={session?.data} />}
      <SinglePostButtons
        isUserAuthor={session?.data?.user?.name === post?.author}
        onBackToPosts={onBackToPosts}
        onDeletePost={onDeletePost}
      />
      <PostCommentsForm
        userName={session?.data?.user?.name!}
        postId={id}
        comments={post?.comments!}
        refetch={fetchPost}
      />
      <PostComments
        comments={post?.comments!}
        userName={session?.data?.user?.name}
        postId={id}
        refetch={fetchPost}
      />
    </>
  );
};

export default SinglePostPage;

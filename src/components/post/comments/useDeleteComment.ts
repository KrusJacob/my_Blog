import { PostsApi } from "@/shared/api/posts";
import { IPost } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { comment } from "postcss";
import React from "react";

const useDeleteComment = () => {
  const queryClient = useQueryClient();

  const deleteMutate = useMutation({
    mutationFn: PostsApi.updatePost,
    async onSettled() {
      queryClient.invalidateQueries({
        queryKey: [PostsApi.baseKey],
      });
    },
  });

  const handleDelete = (post: IPost, commentId: number) => {
    const updatedComments = post.comments.filter((comment) => comment.id !== commentId);
    const updatedPost = { ...post, comments: updatedComments };
    deleteMutate.mutate(updatedPost);
  };

  return {
    handleDelete,
    getIsPending: () => deleteMutate.isPending,
  };
};

export default useDeleteComment;

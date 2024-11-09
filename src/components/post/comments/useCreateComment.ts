import { PostsApi } from "@/shared/api/posts";
import { ISessionUser } from "@/store/session";
import { IPost } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const useСreateComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: PostsApi.updatePost,
    async onSuccess() {
      await queryClient.invalidateQueries({
        queryKey: [PostsApi.baseKey],
      });
      setIsLoading(false);
    },
  });

  const handleComment = (post: IPost, user: ISessionUser, value: string) => {
    setIsLoading(true);
    const newComment = {
      id: (post.comments.at(-1)?.id || 0) + 1,
      text: value,
      author: user.name,
      userId: user.id,
      date: formatDate(new Date()),
    };
    const chanchedPost: IPost = { ...post, comments: [...post.comments, newComment] };
    mutation.mutate(chanchedPost);
  };

  return { handleComment, isLoading };
};

export default useСreateComment;

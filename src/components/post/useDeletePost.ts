import routerService from "@/services/router/routerService";
import { PostsApi } from "@/shared/api/posts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

const useDeletePost = () => {
  const { goToPosts } = routerService();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: PostsApi.deletePost,
    onSuccess: () => {
      goToPosts();
      queryClient.invalidateQueries({
        queryKey: [PostsApi.baseKey],
      });
    },
  });

  const handleDelete = (id: number | undefined) => {
    if (id) {
      mutation.mutate(String(id));
    }
  };

  return { handleDelete };
};

export default useDeletePost;

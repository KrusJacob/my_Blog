import routerService from "@/services/router/routerService";
import { PostsApi } from "@/shared/api/posts";
import { useSessionStore } from "@/store/session";
import { IComment, IPost } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";

const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { goToPosts, goToSignIn } = routerService();
  const sessionUser = useSessionStore((state) => state.sessionUser);

  const mutation = useMutation({
    mutationFn: PostsApi.createPost,
    onMutate: () => {},
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [PostsApi.baseKey],
      });
      goToPosts();
      setIsLoading(false);
    },
    mutationKey: ["create-post"],
  });

  const handleCreate = async (data: FormData) => {
    setIsLoading(true);

    if (sessionUser) {
      const likes = {
        value: 0,
        email: [],
      };
      const comments = [] as IComment[];
      const { title, body } = Object.fromEntries(data);
      const date = new Date();
      const author = sessionUser.name;
      const newPost = { title, body, author, comments, likes, date, userId: sessionUser.id } as IPost;

      mutation.mutate(newPost);
    } else {
      goToSignIn();
    }
  };

  return { handleCreate, isLoading };
};

export default useCreatePost;

import { PostsApi } from "@/shared/api/posts";
import { ISessionUser } from "@/store/session";
import { IPost } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLikePost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: PostsApi.updatePost,

    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: [PostsApi.baseKey, `${newPost.id}`] });
      const previousTodo = queryClient.getQueryData([PostsApi.baseKey, `${newPost.id}`]);
      queryClient.setQueryData([PostsApi.baseKey, `${newPost.id}`], newPost);

      return { previousTodo, newTodo: newPost };
    },

    onError: (err, newTodo, context) => {
      if (context) {
        queryClient.setQueryData([PostsApi.baseKey, `${context.newTodo.id}`], context.previousTodo);
      }
    },

    onSettled: (newTodo) => {
      if (newTodo?.id) {
        queryClient.invalidateQueries({ queryKey: [PostsApi.baseKey] });
      }
    },
  });

  const handleLike = (post: IPost, user: ISessionUser, isLiked: boolean) => {
    const likesPost = post.likes.value;
    let newLikesValue = 0;
    let newLikesEmails = [];
    if (isLiked) {
      newLikesValue = likesPost - 1;
      newLikesEmails = post.likes.email.filter((item) => item !== user.email) || [];
    } else {
      newLikesValue = likesPost + 1;
      newLikesEmails = [...post.likes.email, user.email] || [];
    }
    const chanchedPost: IPost = { ...post, likes: { value: newLikesValue, email: newLikesEmails } };
    if (post.id) {
      mutation.mutate(chanchedPost);
    }
  };

  return { handleLike };
};

export default useLikePost;

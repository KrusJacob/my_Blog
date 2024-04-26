import { IPost } from "@/types/post";

export const FilterByLikes = (posts: IPost[]) => {
  const sortedPosts = posts
    .sort((x, y) => {
      return (x.likes?.value || 0) - (y.likes?.value || 0);
    })
    .reverse();

  return sortedPosts;
};

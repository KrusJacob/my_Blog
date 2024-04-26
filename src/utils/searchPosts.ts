import { IPost } from "@/types/post";

export const searchPosts = (posts: IPost[], search: string) => {
  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase())
    );
  });
};

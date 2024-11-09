import { FilterType } from "@/store/store";
import { IPost } from "@/types/post";

export const filterPosts = (posts: IPost[], filter: FilterType, userId: number | undefined) => {
  if (filter === "my") {
    return posts.filter((post) => post.userId === userId);
  } else {
    return posts;
  }
};

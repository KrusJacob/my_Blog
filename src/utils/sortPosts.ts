import { SortType } from "@/store/store";
import { IPost } from "@/types/post";

export const sortPosts = (posts: IPost[], sort: SortType) => {
  if (sort === "new") {
    return posts.slice().reverse();
  } else {
    return posts;
  }
};

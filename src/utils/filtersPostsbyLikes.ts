import { FilterType } from "@/store/store";
import { IPost } from "@/types/post";

export const filtersPostsbyLikes = (posts: IPost[], filter: FilterType) => {
  if (filter === "likes") {
    return posts
      .sort((x, y) => {
        return (x.likes?.value || 0) - (y.likes?.value || 0);
      })
      .reverse();
  } else {
    return posts;
  }
};

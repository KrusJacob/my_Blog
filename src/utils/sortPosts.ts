import { SortType } from "@/store/store";
import { IPost } from "@/types/post";

export const sortPosts = (posts: IPost[], sort: SortType) => {
  if (sort === "new") {
    return posts.sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime()).reverse();
  } else if (sort === "likes") {
    return posts
      .sort((x, y) => {
        return (x.likes?.value || 0) - (y.likes?.value || 0);
      })
      .reverse();
  } else {
    return posts.sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());
  }
};

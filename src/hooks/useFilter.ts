import { FilterType, SortType } from "@/store/store";
import { IPost } from "@/types/post";
import { filterPosts } from "@/utils/filtersPostsbyLikes";
import { searchPosts } from "@/utils/searchPosts";
import { sortPosts } from "@/utils/sortPosts";

export const useFilter = (
  posts: IPost[],
  search: string,
  filter: FilterType,
  sort: SortType,
  userId: number | undefined
) => {
  return filterPosts(searchPosts(sortPosts(posts, sort), search), filter, userId);
};

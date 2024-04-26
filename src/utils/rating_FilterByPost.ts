import { IPost } from "@/types/post";

export const FilterByPost = (posts: IPost[]) => {
  let result: any = {};
  posts.forEach((post) => {
    result[post.author] = result[post.author] + 1 || 1;
  });

  const sortResult = [];

  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      const value = result[key];

      sortResult.push({
        author: key,
        value: value,
      });
    }
  }

  sortResult
    .sort((x, y) => {
      return x.value - y.value;
    })
    .reverse();

  return sortResult;
};

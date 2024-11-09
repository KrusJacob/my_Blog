import { infiniteQueryOptions, keepPreviousData, queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "./api-instance";
import { IPost } from "@/types/post";

export type PaginatedResult<T> = {
  data: T[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
};

export type TodoDto = {
  id: string;
  text: string;
  done: boolean;
  userId: string;
};

export const PostsApi = {
  baseKey: "posts",
  getPostListQueryOptions: (userId: number | null = null) => {
    return queryOptions({
      queryKey: [PostsApi.baseKey, "list", userId],
      queryFn: (meta) =>
        jsonApiInstance<IPost[]>(`/posts${userId ? `?userId=${userId}` : ""}`, { signal: meta.signal }),
      placeholderData: keepPreviousData,
    });
  },
  getPostByID: (id: string) => {
    return queryOptions({
      queryKey: [PostsApi.baseKey, id],
      queryFn: (meta) => jsonApiInstance<IPost>(`/posts/${id}`, { signal: meta.signal }),
    });
  },
  getPostByAuthor: (author: string) => {
    return queryOptions({
      queryKey: [PostsApi.baseKey, author],
      queryFn: (meta) => jsonApiInstance<IPost[]>(`/posts?author=${author}`, { signal: meta.signal }),
    });
  },
  createPost: (data: IPost) => {
    return jsonApiInstance<IPost>(`/posts`, {
      method: "POST",
      json: data,
    });
  },
  updatePost: (data: Partial<IPost>) => {
    return jsonApiInstance<IPost>(`/posts/${data.id}`, {
      method: "PATCH",
      json: data,
    });
  },
  deletePost: (id: string) => {
    return jsonApiInstance(`/posts/${id}`, {
      method: "DELETE",
    });
  },
};

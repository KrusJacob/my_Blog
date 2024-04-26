import { IPost, IComment } from "@/types/post";

const URL = "https://db-my-blog.onrender.com/posts";

export const postService = {
  fetchPosts: async () => {
    return await fetch(`${URL}`)
      .then((data) => data.json())
      .catch((e) => {
        throw new Error(e);
      });
  },

  getPostByID: async (id: string) => {
    return await fetch(`${URL}/${id}`).then((res) => (res.ok ? res.json() : Promise.reject(res)));
  },

  createPost: async (post: IPost) => {
    await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(post),
    });
  },

  deletePost: async (id: string) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  },
  changeLikes: async (id: string, value: number, email: string[]) => {
    await fetch(`${URL}/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        likes: {
          value: value,
          email: email,
        },
      }),
    });
  },
  leaveComment: async (id: string, value: IComment[]) => {
    await fetch(`${URL}/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        comments: value,
      }),
    });
  },
  deleteComment: async (id: string, value: IComment[]) => {
    await fetch(`${URL}/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        comments: value,
      }),
    });
  },
};

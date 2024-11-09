export type IPost = {
  id?: number;
  title: string;
  body: string;
  author: string;
  date: Date;
  likes: ILikes;
  comments: IComment[];
  userId: number;
};

type ILikes = {
  value: number;
  email: string[];
};

export type IComment = {
  userId: number;
  id: number;
  text: string;
  author: string;
  date: string;
};

export type SelectType = "authors" | "liked posts";

import { ISessionUser } from "@/store/session";
import { IPost } from "@/types/post";
import React from "react";
import SinglePostButtons from "./SinglePostButtons";
import SinglePostBody from "./SinglePostBody";
import PostCommentsForm from "../comments/PostCommentsForm";
import PostCommentList from "../comments/PostCommentList";
import Skeleton from "@/components/UI/Skeleton/Skeleton";
import useDeletePost from "../useDeletePost";

interface Props {
  sessionUser: ISessionUser | null;
  post: IPost;
}

const PostPage = ({ sessionUser, post }: Props) => {
  // const { data: post, isLoading, refetch } = useQuery({ ...PostsApi.getPostByID(id) });

  const { handleDelete } = useDeletePost();

  if (!post) {
    return <Skeleton />;
  }

  return (
    <>
      <SinglePostBody post={post} sessionUser={sessionUser} />
      <SinglePostButtons
        isUserAuthor={sessionUser?.id === post?.userId}
        onDeletePost={() => handleDelete(post.id)}
      />
      <PostCommentsForm sessionUser={sessionUser} post={post} />
      <PostCommentList post={post} user={sessionUser} />
    </>
  );
};

export default PostPage;

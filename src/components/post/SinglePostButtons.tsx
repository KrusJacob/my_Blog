import React from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import Button from "../UI/Button";

interface Props {
  onBackToPosts: () => void;
  onDeletePost: () => void;
  isUserAuthor: boolean;
}
const SinglePostButtons = ({ onBackToPosts, onDeletePost, isUserAuthor }: Props) => {
  return (
    <div className="flex justify-between mt-8">
      <Button rounded="left" Icon={IoReturnDownBackOutline} onClick={onBackToPosts}>
        Back to Posts
      </Button>
      {isUserAuthor && (
        <Button rounded="right" Icon={MdDeleteForever} color="red" onClick={onDeletePost}>
          Delete Post
        </Button>
      )}
    </div>
  );
};

export default SinglePostButtons;

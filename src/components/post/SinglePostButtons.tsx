import React, { useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import Button from "../UI/Button/Button";

interface Props {
  onBackToPosts: () => void;
  onDeletePost: () => void;
  isUserAuthor: boolean;
}
const SinglePostButtons = ({ onBackToPosts, onDeletePost, isUserAuthor }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const onDelete = () => {
    setDisabled(true);
    onDeletePost();
  };

  return (
    <div className="flex justify-between mt-8">
      <Button rounded="left" Icon={IoReturnDownBackOutline} onClick={onBackToPosts}>
        Back
      </Button>
      {isUserAuthor && (
        <Button disabled={disabled} rounded="right" Icon={MdDeleteForever} color="red" onClick={onDelete}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default SinglePostButtons;

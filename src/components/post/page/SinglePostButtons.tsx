import React, { useState } from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import Button from "../../UI/Button/Button";
import routerService from "@/services/router/routerService";
import useDeletePost from "../useDeletePost";
import { useTranslation } from "react-i18next";

interface Props {
  onDeletePost: () => void;
  isUserAuthor: boolean;
}
const SinglePostButtons = ({ onDeletePost, isUserAuthor }: Props) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const { goToPosts } = routerService();

  const onDelete = () => {
    setDisabled(true);
    onDeletePost();
  };

  return (
    <div className="flex justify-between mt-8">
      <Button rounded="left" Icon={IoReturnDownBackOutline} onClick={goToPosts}>
        {t("postPage.btns.back")}
      </Button>
      {isUserAuthor && (
        <Button disabled={disabled} rounded="right" Icon={MdDeleteForever} color="red" onClick={onDelete}>
          {t("postPage.btns.delete")}
        </Button>
      )}
    </div>
  );
};

export default SinglePostButtons;

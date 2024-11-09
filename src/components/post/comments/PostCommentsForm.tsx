import { ISessionUser } from "@/store/session";
import { IPost } from "@/types/post";
import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import useСreateComment from "./useCreateComment";
import toast from "react-hot-toast";

const PostCommentsForm = ({ sessionUser, post }: { sessionUser: ISessionUser | null; post: IPost }) => {
  const [value, setValue] = useState("");
  const { handleComment, isLoading } = useСreateComment();

  const onComment: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (sessionUser) {
      handleComment(post, sessionUser, value);
    } else {
      toast("You need to login");
    }
    setValue("");
  };

  return (
    <>
      <form onSubmit={onComment} className="mt-10">
        <textarea
          required
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="comment..."
          className="w-full bg-white bg-opacity-90 border-black border rounded-tr-3xl rounded-tl-3xl min-h-[140px] max-h-[400px] p-4 text-lg"
          name="text"
        ></textarea>
        <button
          disabled={isLoading}
          className="w-full bg-[var(--purpleColor)] text-white px-4 py-2 text-xl rounded-br-3xl rounded-bl-3xl group hover:bg-purple-600 cursor-pointer disabled:opacity-50"
        >
          <div className="flex gap-4 items-center group-hover:translate-x-3 duration-300 justify-center">
            <span className="text-xl"> Leave a comment </span>
            <HiOutlineArrowLongRight />
          </div>
        </button>
      </form>
      {!sessionUser && (
        <p className="text-center text-lg text-red-800 mt-2 font-semibold">
          To leave a comment or like, you need to log in
        </p>
      )}
    </>
  );
};

export default PostCommentsForm;
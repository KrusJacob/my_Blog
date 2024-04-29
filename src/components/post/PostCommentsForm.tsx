import { postService } from "@/services/postService";
import { IComment } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const PostCommentsForm = ({
  userName,
  postId,
  comments,
  refetch,
}: {
  userName: string;
  postId: string;
  comments: IComment[];
  refetch: () => void;
}) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const leaveComments: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (value) {
      setLoading(true);
      const newComments = [
        ...comments,
        { id: (comments.at(-1)?.id || 0) + 1, text: value, author: userName, date: formatDate(new Date()) },
      ];
      postService.leaveComment(postId, newComments).then(() => {
        setLoading(false);
        refetch();
      });
      setValue("");
    }
  };

  return (
    <>
      <form onSubmit={leaveComments} className="mt-10">
        <textarea
          required
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="comment..."
          className="w-full bg-white bg-opacity-90 border-black border rounded-tr-3xl rounded-tl-3xl min-h-[140px] max-h-[400px] p-4 text-lg"
          name="text"
        ></textarea>
        <button
          disabled={loading}
          className="w-full bg-[var(--purpleColor)] text-white px-4 py-2 text-xl rounded-br-3xl rounded-bl-3xl group hover:bg-purple-600 cursor-pointer disabled:bg-opacity-40"
        >
          <div className="flex gap-4 items-center group-hover:translate-x-3 duration-300 justify-center">
            <span className="text-xl"> Leave a comment </span>
            <HiOutlineArrowLongRight />
          </div>
        </button>
      </form>
      {!userName && (
        <p className="text-center text-lg text-red-800 mt-2 font-semibold">
          To leave a comment or like, you need to log in
        </p>
      )}
    </>
  );
};

export default PostCommentsForm;

import React, { ReactNode } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { IoReload } from "react-icons/io5";

interface Props {
  children: ReactNode;
  refetch: () => void;
  onCreate: () => void;
}

const PostsWrapper = ({ children, onCreate, refetch }: Props) => {
  return (
    <>
      <div className="flex text-3xl md:text-5xl justify-between items-center  rounded-tl-3xl  rounded-tr-3xl bg-[var(--purpleColor)]">
        <div
          onClick={onCreate}
          className="text-white  flex items-center rounded-tl-3xl  cursor-pointer px-4 py-2 hover:bg-purple-300 hover:text-[var(--purpleColor)] duration-200"
        >
          <CiSquarePlus />
          <span className="text-2xl text-[var(--purpleColor)] mr-2 px-2 md:block hidden">New post</span>
        </div>
        <div>
          <h2 className="text-center text-3xl text-white">Posts</h2>
        </div>
        <div
          onClick={() => refetch()}
          className="text-white  flex items-center rounded-tr-3xl  cursor-pointer px-4 py-2 hover:bg-purple-300 hover:text-[var(--purpleColor)] duration-200"
        >
          <span className="text-2xl text-[var(--purpleColor)] mr-2 px-2 md:block hidden">Update</span>
          <IoReload />
        </div>
      </div>
      {children}
      <div className="bg-[var(--purpleColor)] h-10 mt-2 rounded-br-3xl rounded-bl-3xl"></div>
    </>
  );
};

export default PostsWrapper;

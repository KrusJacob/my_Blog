import React from "react";

interface Props {}

const Skeleton = () => {
  return (
    <div className="w-full flex flex-col gap-6 animate-pulse">
      <div className="h-[60px] w-1/2 m-auto  bg-gray-400 bg-opacity-30 rounded-xl"></div>
      <div className="h-[400px] bg-gray-400 bg-opacity-30 rounded-xl"></div>
      <div className="h-[40px]  bg-gray-400 bg-opacity-30 rounded-xl"></div>
    </div>
  );
};

export default Skeleton;

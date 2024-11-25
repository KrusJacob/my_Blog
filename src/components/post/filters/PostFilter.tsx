import { useSessionStore } from "@/store/session";
import { useStore } from "@/store/store";
import React, { useEffect, useState } from "react";

const PostFilter = () => {
  const activeFilter = useStore((state) => state.filter);
  const changeFilter = useStore((state) => state.changeFilter);
  const sessionUser = useSessionStore((state) => state.sessionUser);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!sessionUser);
  }, [sessionUser]);

  return (
    <>
      <p>Filter by:</p>
      <button
        onClick={() => changeFilter("all")}
        className={`${
          activeFilter === "all" ? "bg-white text-black" : "bg-[var(--purpleColor)] text-white"
        } px-2 py-1 border border-black rounded duration-200 hover:text-bg-[var(--purpleColor)]`}
      >
        All
      </button>
      <button
        disabled={isDisabled}
        onClick={() => changeFilter("my")}
        className={`${
          activeFilter === "my" ? "bg-white text-black" : "bg-[var(--purpleColor)] text-white"
        } px-2 py-1 border border-black rounded duration-200 hover:text-bg-[var(--purpleColor)] disabled:opacity-50`}
      >
        My
      </button>
    </>
  );
};

export default PostFilter;

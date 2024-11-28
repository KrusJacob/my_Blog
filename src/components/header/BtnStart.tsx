"use client";
import { redirect, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { navPaths } from "@/services/paths/navPaths";
import { useSessionStore } from "@/store/session";

const BtnStart = () => {
  // const [off, setOff] = useState(false);
  const router = useRouter();
  const session = useSession();
  const removeSessionUser = useSessionStore((state) => state.removeSessionUser);

  const onClickOn = () => {
    if (!session.data) {
      router.push(`${navPaths.SIGNIN}`);
    } else {
      signOut({
        callbackUrl: `${navPaths.HOME}`,
      });
      removeSessionUser();
      localStorage.removeItem("sessionUser");
    }
  };

  return (
    <div className="md:p-2 p-1 absolute right-1 md:right-8  top-5 bg-inherit rounded-full">
      <div
        title={session.data ? "logout" : "login"}
        onClick={onClickOn}
        className={`${
          session?.data
            ? "from-red-700 to-red-500 border-red-900 myShadowRed"
            : "from-green-700 to-green-500 border-green-900 myShadowGreen"
        }  rounded-full bg-gradient-to-r border-2 border-b-8 text-4xl w-[65px] h-[65px] md:w-[100px] md:h-[100px] flex justify-center items-center hover:translate-y-[2px] duration-200 cursor-pointer `}
      >
        <FaPowerOff />
      </div>
    </div>
  );
};

export default BtnStart;

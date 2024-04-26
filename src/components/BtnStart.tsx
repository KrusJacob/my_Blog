"use client";
import { redirect, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { navPaths } from "@/services/paths/navPaths";

const BtnStart = () => {
  // const [off, setOff] = useState(false);
  const router = useRouter();
  const session = useSession();

  const onClickOn = () => {
    if (!session.data) {
      router.push(`${navPaths.SIGNIN}`);
    } else {
      signOut({
        callbackUrl: `${navPaths.HOME}`,
      });
    }
  };

  return (
    <div className="p-3 absolute right-4 md:right-8  top-4 bg-inherit rounded-full border border-purple-900">
      <div
        title={session.data ? "logout" : "login"}
        onClick={onClickOn}
        className={`${
          session?.data
            ? "from-red-700 to-red-500 border-red-900 myShadowRed"
            : "from-green-700 to-green-500 border-green-900 myShadowGreen"
        }  rounded-full bg-gradient-to-r border-2 border-b-8 text-4xl w-[70px] h-[70px] md:w-[110px] md:h-[110px] flex justify-center items-center hover:border-b-4 duration-200 cursor-pointer `}
      >
        <FaPowerOff />
      </div>
    </div>
  );
};

export default BtnStart;

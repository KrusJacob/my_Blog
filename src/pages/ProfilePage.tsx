"use client";
import ProfileForm from "@/components/ProfileForm";
import { postService } from "@/services/postService";
import { IPost } from "@/types/post";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [totalLikes, setTotalLiker] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const session = useSession();

  useEffect(() => {
    postService.fetchPosts().then((data: IPost[]) => {
      const userPosts = data.filter((post) => post.author === session?.data?.user?.name);
      const totalLikes = userPosts.reduce((acc, cur) => acc + cur.likes!.value, 0);
      setTotalPosts(userPosts.length);
      setTotalLiker(totalLikes);
    });
  }, []);

  return (
    <div>
      <div className="w-full px-4 py-4 bg-[var(--purpleColor)] rounded-tr-3xl rounded-tl-3xl ">
        <h2 className="text-white text-center text-3xl ">My Profile</h2>
      </div>
      <div className="flex flex-col gap-10 bg-slate-200 bg-opacity-50 border shadow-md shadow-slate-400 px-4 md:px-8 py-4 min-h-[400px] mt-2 text-xl md:text-2xl ">
        {session?.data?.user && <ProfileForm user={session?.data.user} />}

        <div>
          <h5 className="text-[var(--purpleColor)] font-semibold text-3xl text-center">Statistics</h5>
          <p>Total posts: {totalPosts}</p>
          <p>Total likes: {totalLikes}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

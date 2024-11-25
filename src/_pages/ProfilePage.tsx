"use client";
import ProfileForm from "@/components/profile/ProfileForm";
import { useQuery } from "@tanstack/react-query";
import { PostsApi } from "@/shared/api/posts";
import React, { useEffect, useState } from "react";
import Loader from "@/components/UI/Loader/Loader";
import { useSessionStore } from "@/store/session";

const ProfilePage = () => {
  const [totalLikes, setTotalLiker] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const sessionUser = useSessionStore((state) => state.sessionUser);

  const { data, isFetched } = useQuery({
    ...PostsApi.getPostListQueryOptions(sessionUser?.id),
    enabled: !!sessionUser?.id,
  });

  useEffect(() => {
    if (data) {
      const totalLikes = data.reduce((acc, cur) => acc + cur.likes.value, 0);
      setTotalPosts(data.length);
      setTotalLiker(totalLikes);
    }
  }, [data]);

  if (!isFetched) {
    return <Loader />;
  }

  return (
    <div>
      <div className="w-full px-2 py-2 bg-[var(--purpleColor)] rounded-tr-3xl rounded-tl-3xl ">
        <h2 className="text-white text-center text-3xl ">My Profile</h2>
      </div>
      <div className="flex flex-col gap-10 bg-slate-200 bg-opacity-60 border shadow-md shadow-slate-400 px-4 md:px-8 py-4 min-h-[400px] mt-2 text-base md:text-2xl ">
        <ProfileForm />

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

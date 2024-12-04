import { PostsApi } from "@/shared/api/posts";
import { useSessionStore } from "@/store/session";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../UI/Loader/Loader";

const ProfileStatistics = ({}) => {
  const { t } = useTranslation();
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
  }, []);

  if (!isFetched) {
    return <Loader />;
  }

  return (
    <div>
      <h5 className="text-[var(--purpleColor)] font-semibold text-3xl text-center">
        {t("profile.statistics.title")}
      </h5>
      <p>
        {t("profile.statistics.posts")} {totalPosts}
      </p>
      <p>
        {t("profile.statistics.likes")} {totalLikes}
      </p>
    </div>
  );
};

export default ProfileStatistics;

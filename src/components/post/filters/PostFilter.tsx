import { useSessionStore } from "@/store/session";
import { useStore } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const PostFilter = () => {
  const [isClient, setIsClient] = useState(false);
  const activeFilter = useStore((state) => state.filter);
  const changeFilter = useStore((state) => state.changeFilter);
  const sessionUser = useSessionStore((state) => state.sessionUser);
  const { t } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <p>{t("posts.filters.filter.title")}</p>
      <button
        onClick={() => changeFilter("all")}
        className={`${
          activeFilter === "all" ? "bg-white text-black" : "bg-[var(--purpleColor)] text-white"
        } px-2 py-1 border border-black rounded duration-200 hover:text-bg-[var(--purpleColor)]`}
      >
        {t("posts.filters.filter.all")}
      </button>
      <button
        disabled={sessionUser ? false : true}
        onClick={() => changeFilter("my")}
        className={`${
          activeFilter === "my" ? "bg-white text-black" : "bg-[var(--purpleColor)] text-white"
        } px-2 py-1 border border-black rounded duration-200 hover:text-bg-[var(--purpleColor)] disabled:opacity-50`}
      >
        {t("posts.filters.filter.my")}
      </button>
    </>
  );
};

export default PostFilter;

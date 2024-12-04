"use client";
import ProfileForm from "@/components/profile/ProfileForm";
import React from "react";
import { useTranslation } from "react-i18next";
import ProfileStatistics from "@/components/profile/ProfileStatistics";

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-full px-2 py-2 bg-[var(--purpleColor)] rounded-tr-3xl rounded-tl-3xl ">
        <h2 className="text-white text-center text-3xl ">{t("profile.title")}</h2>
      </div>
      <div className="flex flex-col gap-10 bg-slate-200 bg-opacity-60 border shadow-md shadow-slate-400 px-4 md:px-8 py-4 min-h-[400px] mt-2 text-base md:text-2xl ">
        <ProfileForm />
        <ProfileStatistics />
      </div>
    </div>
  );
};

export default ProfilePage;

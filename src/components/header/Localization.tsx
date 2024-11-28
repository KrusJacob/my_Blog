"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const lngs: Record<string, { nativeName: string }> = {
  en: { nativeName: "ENG" },
  ru: { nativeName: "RU" },
};

const Localization = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <div className="w-[70px] md:w-[100px] md:text-lg text-sm flex items-center">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          className={`${i18n.resolvedLanguage === lng ? "bg-white text-[var(--purpleColor)]" : ""} w-1/2 border`}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default Localization;

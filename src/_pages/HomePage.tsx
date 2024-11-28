"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center text-white">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl lg:text-5xl xl:text-6xl"
      >
        {t("home.welcomeTitle")}
        <div className="text-[var(--purpleColor)] inline-block  shadow-md  shadow-slate-400 bg-white bg-opacity-90 rounded-xl px-2 py-2  font-semibold">
          My Blog
        </div>
      </motion.h1>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-xl lg:text-2xl xl:text-4xl mt-14"
      >
        {t("home.description")}
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 1 }}>
        <Link
          className="mt-14 bg-white font-bold text-[var(--purpleColor)]  text-xl lg:text-2xl inline-block px-6 py-4 rounded hover:bg-purple-600 hover:text-white duration-200"
          href={"/posts/create"}
        >
          {t("home.btn")}
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;

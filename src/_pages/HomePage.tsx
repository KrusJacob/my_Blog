"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-center text-white">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl lg:text-5xl xl:text-7xl"
      >
        Welcome to{" "}
        <span className="text-[var(--purpleColor)] shadow-md  shadow-slate-400 bg-white bg-opacity-90 rounded-xl px-2  font-semibold">
          My Blog
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-xl lg:text-2xl xl:text-4xl mt-14"
      >
        Here, you can share your thoughts, ideas, and stories with the world. Publish your posts, read and rate
        others’ entries, leave comments, and join the discussions. Become a part of our community and get inspired
        by new ideas every day!
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 1 }}>
        <Link
          className="mt-14 bg-white font-bold text-[var(--purpleColor)]  text-xl lg:text-2xl inline-block px-6 py-4 rounded hover:bg-purple-600 hover:text-white duration-200"
          href={"/posts/create"}
        >
          Create my first post
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;

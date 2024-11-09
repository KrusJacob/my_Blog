"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl lg:text-5xl xl:text-7xl"
      >
        Welcome to <span className="text-[var(--purpleColor)] font-semibold">My Blog</span>
      </motion.h1>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-xl lg:text-2xl xl:text-4xl mt-14"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi mollitia ea totam maxime quae consequatur
        consequuntur facilis, dolor itaque eos. Eius accusamus in labore adipisci rerum sapiente esse ex nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem obcaecati consectetur labore.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 1 }}>
        <Link
          className="mt-14 bg-[var(--purpleColor)] text-xl lg:text-2xl inline-block text-white px-6 py-4 rounded hover:bg-purple-600 duration-200"
          href={"/posts/create"}
        >
          Create my first post
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;

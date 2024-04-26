import { motion } from "framer-motion";
import React from "react";

type RatingItemProps = {
  item: any;
  place: number;
  value: number;
  type: "likes" | "posts";
};

const RatingItem = ({ item, place, value, type }: RatingItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 py-2 border border-[var(--purpleColor)] rounded bg-slate-100 flex justify-between items-center mb-1 bg-opacity-80"
    >
      <p className="text-3xl text-[var(--purpleColor)]">{place}</p>
      <p>{item}</p>
      <span>{`${value} ${type}`}</span>
    </motion.div>
  );
};

export default RatingItem;

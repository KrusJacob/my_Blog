import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type RatingItemProps = {
  item: any;
  place: number;
  value: number;
  type: string | ReactNode;
};

const RatingItem = ({ item, place, value, type }: RatingItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 py-2 border border-[var(--purpleColor)] text-lg rounded bg-slate-100 flex justify-between items-center gap-2 mb-1 bg-opacity-80"
    >
      <p className="text-3xl text-[var(--purpleColor)]">{place}</p>
      <p>{item}</p>
      <span className="flex gap-1 items-center">
        {`${value}`}
        {type}
      </span>
    </motion.div>
  );
};

export default RatingItem;

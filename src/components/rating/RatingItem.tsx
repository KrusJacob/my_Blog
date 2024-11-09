import { images } from "@/assets";
import routerService from "@/services/router/routerService";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type RatingItemProps = {
  item: any;
  place: number;
  value: number;
  type: string | ReactNode;
  postId?: number | undefined;
};

const RatingItem = ({ item, place, value, type, postId }: RatingItemProps) => {
  const { goToPostById } = routerService();

  return (
    <motion.div
      onClick={() => {
        postId && goToPostById(postId);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      transition={{ duration: 0.8 }}
      className="w-full px-4 py-2 border border-[var(--purpleColor)] text-lg rounded bg-slate-100 flex justify-between items-center gap-2 mb-1 bg-opacity-80 cursor-pointer"
    >
      <p className="text-3xl text-[var(--purpleColor)]">{place}</p>
      <div className="flex items-center gap-4">
        <img src={typeof type === "string" ? images.avatarDefault.src : images.post.src} className="h-10" alt="" />
        <p>{item}</p>
      </div>
      <span className="flex gap-1 items-center">
        {`${value}`}
        {type}
      </span>
    </motion.div>
  );
};

export default RatingItem;

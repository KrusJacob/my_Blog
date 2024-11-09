import { useRouter } from "next/navigation";
import React from "react";
import { navPaths } from "../paths/navPaths";

const routerService = () => {
  const router = useRouter();

  const goToPosts = () => {
    router.push(`${navPaths.POSTS}`);
  };
  const goToHome = () => {
    router.push(`${navPaths.HOME}`);
  };
  const goToProfile = () => {
    router.push(`${navPaths.PROFILE}`);
  };
  const goToRaiting = () => {
    router.push(`${navPaths.RAITING}`);
  };
  const goToSignIn = () => {
    router.push(`${navPaths.SIGNIN}`);
  };
  const goToCreatePost = () => {
    router.push(`${navPaths.POSTS}/create`);
  };
  const goToPostById = (id: number) => {
    router.push(`${navPaths.POSTS}/${id}`);
  };

  return { goToPosts, goToHome, goToCreatePost, goToPostById, goToProfile, goToRaiting, goToSignIn };
};

export default routerService;

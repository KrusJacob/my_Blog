import React from "react";

import BtnStart from "./BtnStart";
import Navigation from "./Navigation";
import { navPaths } from "@/services/paths/navPaths";

const navItems = [
  { label: "Home", path: navPaths.HOME },
  { label: "Posts", path: navPaths.POSTS },
  { label: "Rating", path: navPaths.RAITING },
];

const Header = () => {
  return (
    <header className="bg-[var(--purpleColor)] text-white relative w-full px-4 md:px-8 py-6 flex">
      <h3 className="text-5xl md:block hidden">My Blog</h3>
      <Navigation navItems={navItems} />
      <BtnStart />
    </header>
  );
};

export default Header;

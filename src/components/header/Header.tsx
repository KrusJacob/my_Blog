import React from "react";
import BtnStart from "./BtnStart";
import Navigation from "./Navigation";
import { navPaths } from "@/services/paths/navPaths";
import Localization from "./Localization";

const navItems = [
  { label: "home", path: navPaths.HOME },
  { label: "posts", path: navPaths.POSTS },
  { label: "rating", path: navPaths.RAITING },
];

const Header = () => {
  return (
    <header className="bg-[var(--purpleColor)] text-white relative w-full px-2 md:px-8 py-6 flex justify-between">
      <h3 className="text-5xl lg:block hidden">My Blog</h3>
      <Navigation navItems={navItems} />
      <div className="mr-[80px] md:mr-[140px] hidden sm:block ">
        <Localization />
      </div>

      <BtnStart />
    </header>
  );
};

export default Header;

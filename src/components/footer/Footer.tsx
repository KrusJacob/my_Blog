import React from "react";
import Localization from "../header/Localization";

const Footer = () => {
  return (
    <footer className="bg-[var(--purpleColor)] text-white  w-full px-6 py-4 flex justify-between items-center">
      <p className="text-base md:text-xl mx-auto">My Blog | Krus Jacob ©</p>
      <div className="sm:hidden block">
        <Localization />
      </div>
    </footer>
  );
};

export default Footer;

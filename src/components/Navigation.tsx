"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { navPaths } from "@/services/paths/navPaths";

type navItemsProps = {
  label: string;
  path: string;
};

const Navigation = ({ navItems }: { navItems: navItemsProps[] }) => {
  const session = useSession();
  const pathName = usePathname();

  return (
    <div className="md:m-auto flex gap-4 md:gap-8 text-lg md:text-2xl pr-16">
      {navItems.map((link) => {
        const active = pathName === link.path;

        return (
          <Link
            className={`${active ? "active" : ""} hover:text-sky-400 duration-200`}
            key={link.label}
            href={link.path}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && (
        <Link
          className={`${pathName === "/profile" ? "active" : ""} hover:text-sky-400 duration-200`}
          href={navPaths.PROFILE}
        >
          Profile
        </Link>
      )}
    </div>
  );
};

export default Navigation;

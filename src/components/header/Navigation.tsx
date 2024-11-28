"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import { navPaths } from "@/services/paths/navPaths";
import { useTranslation } from "react-i18next";

type navItemsProps = {
  label: string;
  path: string;
};

const Navigation = ({ navItems }: { navItems: navItemsProps[] }) => {
  const { t } = useTranslation();
  const session = useSession();
  const pathName = usePathname();

  return (
    <div className="md:m-auto flex gap-3 md:gap-6 text-lg md:text-2xl">
      {navItems.map((link) => {
        const active = pathName === link.path;

        return (
          <Link
            className={`${active ? "active" : ""} hover:text-sky-400 duration-200 text-white`}
            key={link.label}
            href={link.path}
          >
            {t(`header.navigation.${link.label}`)}
          </Link>
        );
      })}
      {session?.data && (
        <Link
          className={`${pathName === "/profile" ? "active" : ""} hover:text-sky-400 duration-200 text-white`}
          href={navPaths.PROFILE}
        >
          {t(`header.navigation.profile`)}
        </Link>
      )}
    </div>
  );
};

export default Navigation;

import { navPaths } from "@/services/paths/navPaths";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center text-white">
      <h2 className="text-6xl font-bold ">404</h2>
      <p className="text-2xl my-4">{t("notFound.descr")}</p>
      <Link
        className="border block w-max m-auto bg-slate-100 px-4 py-2 text-xl rounded hover:bg-slate-200 duration-200"
        href={navPaths.HOME}
      >
        {t("notFound.button")}
      </Link>
    </div>
  );
};

export default NotFound;

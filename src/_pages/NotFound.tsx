import { navPaths } from "@/services/paths/navPaths";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center text-white">
      <h2 className="text-5xl font-bold ">Not Found</h2>
      <p className="text-xl mt-2">Could not find requested resource</p>
      <Link
        className="mt-4 border block w-max m-auto bg-slate-100 px-4 py-2 text-xl rounded hover:bg-slate-200 duration-200"
        href={navPaths.HOME}
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;

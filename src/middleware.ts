import { navPaths } from "./services/paths/navPaths";

export { default } from "next-auth/middleware";

export const config = { matcher: [`/posts/create`] };

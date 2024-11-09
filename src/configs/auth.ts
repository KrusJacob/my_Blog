import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { navPaths } from "@/services/paths/navPaths";
import { UserApi } from "@/shared/api/users";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const searchedUser = (await UserApi.getUser(credentials.email))[0];
        if (searchedUser && searchedUser.password === credentials.password) {
          const { password, ...userWithoutPass } = searchedUser;

          return { ...userWithoutPass, id: String(userWithoutPass.id) };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
  pages: {
    signIn: `${navPaths.SIGNIN}`,
  },
};

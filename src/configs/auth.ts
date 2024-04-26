import { userService } from "@/services/userService";
import type { AuthOptions, Session, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { IUser } from "@/types/user";
import { navPaths } from "@/services/paths/navPaths";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const users = await userService.fetchUsers();
        const currentUser = users.find((user: IUser) => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
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

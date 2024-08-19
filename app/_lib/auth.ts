import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import { createUser, getUser } from "./supabaseApi/supabaseAPI";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized(params) {
      return params.auth ? true : false;
    },
    async signIn(params) {
      try {
        console.log(params);
        const email = params.user.email;
        if (!email) throw new Error("Email is not defined");
        const user = await getUser(email);
        if (!user?.length)
          await createUser({
            email,
            fullName: params.user.name!,
            googleId: params.user.id!,
          });
        return true;
      } catch (error) {
        return false;
      }
    },
    async session(params) {
      console.log("called session", params);
      params.session.user.userId = (
        await getUser(params.session.user.email)
      )?.[0].id as number;
      return params.session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

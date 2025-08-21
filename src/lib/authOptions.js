import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import dbConnect, { collectionNameObj } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        console.log(user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      // Only handle social logins
      if (account && account.provider !== "credentials") {
        const userCollection = dbConnect(collectionNameObj.usersCollection);
        const existingUser = await userCollection.findOne({
          email: user.email,
        });
        if (!existingUser) {
          const payload = {
            providerAccountId: account.providerAccountId,
            provider: account.provider,
            email: user.email,
            image: user.image,
            name: user.name,
          };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    },
  },
};

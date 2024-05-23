import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt, { compare } from "bcrypt";
import { sql } from '@vercel/postgres';

//import { pages } from "next/dist/build/templates/app-page";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          if (!credentials.username || !credentials.password) {
            console.error("Missing username or password");
            return null;
          }

          const result = await sql`SELECT * FROM users WHERE username = ${credentials.username}`;
          const existingUser = result.rows[0];

          if (!existingUser) {
            console.error("No user found with the provided username");
            return null;
          }

          const match = await bcrypt.compare(credentials.password, existingUser.password);

          if (!match) {
            console.error("Password does not match");
            return null;
          }

          // User authenticated successfully
          const user = {
            id: existingUser.iduser,
            username: existingUser.username,
            prenom: existingUser.prenom,
            nom: existingUser.nom,
          };
          console.log("User authenticated:", user);
          return user;
        } catch (error) {
          console.error("Error during user authentication:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn : '/sign-in'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.prenom = user.prenom;
        token.nom = user.nom;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.prenom = token.prenom;
        session.user.nom = token.nom;
      }
      return session;
    }
  },
};
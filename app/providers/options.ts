import { Account, Profile, User, Session, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { JWT } from 'next-auth/jwt';

const prisma = new PrismaClient();

export const OPTIONS = {
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            name: "Authentication",
            credentials: {
                username: {name: "username", label: "Username", type: "text"},
                password: {name: "password", label: "Password", type: "password"}
            },

            async authorize (credentials, req) {

                const user = {id: "1", name: "david Shalom", email: "adedavid.tech@gmail.com"};

                if(user) {
                    return user;
                }

                else {
                    return null;
                }
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],

    pages: {
        signIn: "/login"
    }

    // callbacks: {
    //     async signIn(params: {
    //     user?: User | null;
    //     account?: Account | null;
    //     profile?: Profile | null;
    //     email?: { verificationRequest?: boolean } | null;
    //     credentials?: Record<string, unknown> | null;
    //     }) {
    //     const { account } = params;

    //     if (account?.provider === 'google') {
    //         // Return false to prevent account creation
    //         return true;
    //     }

    //     // Your other signIn logic here

    //     // Return true to allow account creation
    //     return true;
    //     },
    // }
} satisfies NextAuthOptions
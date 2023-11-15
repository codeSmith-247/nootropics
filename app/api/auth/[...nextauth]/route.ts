import NextAuth from "next-auth";
import { OPTIONS } from "@/app/providers/options";


const handler = NextAuth(OPTIONS);

export { handler as POST, handler as GET };
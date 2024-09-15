import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/lib/db";
import {authOptions} from "./authData";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
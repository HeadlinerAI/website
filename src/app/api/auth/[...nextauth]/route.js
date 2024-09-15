import NextAuth from "next-auth"
import {authOptions} from "./authData";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
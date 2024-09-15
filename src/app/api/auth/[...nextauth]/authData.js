import GoogleProvider from "next-auth/providers/google";
import {db} from "@/lib/db";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            checks: ['none'],
        }),
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === 'google') {
                let udb = await db.users.findFirst({
                    where: {
                        email: email
                    }
                });
                if (!udb) {
                    udb = await db.users.create({
                        data: {
                            name: profile.name,
                            email: email,
                        }
                    });
                }
                user.userId = udb.id;
            }
        }
    }
}
import { db } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if (req.method === 'GET') {
        // Process a GET request
        const bookmarks = await db.bookmarks.findFirst({
            where: {
                userId: session.userId
            }
        });
        res.status(200).json(bookmarks).send();
    } else {
        // return invalid method
        res.status(405).send({message: 'Method Not Allowed'});
    }
}
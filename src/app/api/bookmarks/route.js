import { db } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/authData";
import {NextResponse} from "next/server";


export async function GET() {
    const session = await getServerSession(authOptions);
    // Process a GET request
    if (!session) {
        return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }
    const bookmarks = await db.bookmarks.findFirst({
        where: {
            userId: session.user.userId
        }
    });
    return NextResponse.json(bookmarks, {status: 200});
}
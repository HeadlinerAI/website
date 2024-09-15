import {getServerSession} from "next-auth/next";
import {authOptions} from "../auth/[...nextauth]/authData";
import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import NewsAPI from "newsapi";
import {loadNewsContent} from "@/lib/dom";
import OpenAI from "openai";

export async function GET() {
    const session = await getServerSession(authOptions);
    // Process a GET request
    if (!session) {
        return NextResponse.json({error: 'Unauthorized'}, {status: 401});
    }
    const user = await db.users.findFirst({
        where: {
            userId: session.user.userId
        }
    });
    if (user.last_feed_generated == null || user.last_feed_generated < new Date().getTime() - 86400000) {
        // Generate feed
        user.last_feed_generated = new Date().getTime();
        await db.users.update({
            where: {
                userId: session.user.userId
            },
            data: {
                last_feed_generated: user.last_feed_generated
            }
        });
        // newsapi
        let news = new NewsAPI(process.env.NEWS_API_KEY);
        let preferences = db.preference.findMany({
            limit: 5,
            where: {
                userId: session.user.userId
            }
        });
        let feed = [];
        for (let preference of preferences) {
            let response = await news.v2.everything({
                q: preference.keyword,
            });
            for (let i = 0; i < 2; i++) {
                let article = response.articles[i];
                let fullText = await loadNewsContent(article.url);
                const openai = new OpenAI();
                const result = openai.chat.completions.create({
                    model: "gpt-4-turbo",
                    messages: [
                        { role: "system", content: "You're a professional news reporter and news summarizer."
                                + " You are to assist the user by summarizing the provided news "
                                + " article they give to you. In a clear, concise and beneficial way." },
                        {
                            role: "user",
                            content: fullText,
                        },
                    ],
                });
                let summary = result.choices[0].message.content;
                feed.push({
                        title: article.title,
                        summary: summary,
                        url: article.url,
                        urlToImage: article.urlToImage,
                        publishedAt: article.publishedAt
                })
            }
            return NextResponse.json(feed.toJSON(), {status: 200});
        }
    }
}
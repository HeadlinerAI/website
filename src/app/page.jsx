'use client';

import PushNotificationManager from "@/components/PushNotifications";
import InstallPrompt from "@/components/InstallPrompt";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
	ThemeProvider
} from "@/components/theme-provider";

export default function Home() {
  return (
    <div className="min-h-screen w-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-screen">
        <div>
          <PushNotificationManager/>
          <InstallPrompt/>
        </div>
        <h1 className="header">Headliner</h1>
        <Card className="news-card">
      		<CardHeader>
    			<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing elit.</CardTitle>
    			<CardDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum bibendum natoque primis id vehicula libero nulla.</CardDescription>
  			</CardHeader>
		</Card>
        <ul class = "navbar">
            <li><a href = "/account">Account</a></li>
            <li><a href = "/app">News</a></li>
            <li><a href = "/bookmarks">Bookmarks</a></li>
            <li><a href = "/search">Search</a></li>
        </ul>
      </main>
    </div>

    
  );
  
}

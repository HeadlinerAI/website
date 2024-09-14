'use client';

import Image from "next/image";
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
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import {
	Button
} from "@/components/ui/button"
import {
	ThemeProvider
} from "@/components/theme-provider"


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
	  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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

		<Drawer>
  			<DrawerTrigger>
				<Card className="news-card">
      				<CardHeader>
    					<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing elit.</CardTitle>
    					<CardDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum bibendum natoque primis id vehicula libero nulla.</CardDescription>
  					</CardHeader>
				</Card>
			</DrawerTrigger>
  			<DrawerContent></DrawerContent>
		</Drawer>
      </main>
	</ThemeProvider>
    </div>
  );
}

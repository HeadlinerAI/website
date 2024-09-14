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
			  <Drawer>
				  <DrawerTrigger>
					  <Card className="news-card">
						  <CardHeader>
							  <CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing elit.</CardTitle>
							  <CardDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum bibendum natoque primis id vehicula libero nulla.</CardDescription>
						  </CardHeader>
					  </Card>
				  </DrawerTrigger>
				  <DrawerContent>
					  <DrawerHeader>
						  {/*<img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-full w-20 h-20"/>-->*/}
						  <img src="https://cdn.vox-cdn.com/thumbor/SwcC3EUYhS7CvzpU-j6ilklwVsI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24328229/g95schero.jpg"></img>
						  <DrawerTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing elit.</DrawerTitle>
						  <DrawerDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing elit. Bibendum bibendum natoque primis id vehicula libero nulla.</DrawerDescription>
					  </DrawerHeader>
					  <DrawerFooter>

						  <DrawerClose>

						  </DrawerClose>
					  </DrawerFooter>
				  </DrawerContent>
			  </Drawer>
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

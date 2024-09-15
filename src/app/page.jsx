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
} from "@/components/ui/drawer";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel-touch";
import {signIn} from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen w-screen font-[family-name:var(--font-geist-sans)]">
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-screen">
			<div className="hidden">
				<PushNotificationManager/>
				<InstallPrompt/>
			</div>
			<button onClick={() => signIn()}>Sign in</button>
      <div className="title">
            <h1 className="header">Headliner</h1>
        </div>
			<Carousel>
				<h3 className="carousel-label">View more from this topic</h3>
				<CarouselContent className="news-card-small-container">
					<CarouselItem>
						<Card className="news-card-small">
							<CardHeader>
								<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
									elit.</CardTitle>
							</CardHeader>
						</Card>
					</CarouselItem>
					<CarouselItem className="news-card-small-container">
						<Card className="news-card-small">
							<CardHeader>
								<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
									elit.</CardTitle>
							</CardHeader>
						</Card>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious/>
				<CarouselNext/>
			</Carousel>

			<Drawer>
				<DrawerTrigger>
					<Card className="news-card">
						<CardHeader>
							<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
								elit.</CardTitle>
							<CardDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing
								elit. Bibendum bibendum natoque primis id vehicula libero nulla.</CardDescription>
						</CardHeader>
					</Card>
				</DrawerTrigger>
				<DrawerContent className="article-content">
					<DrawerHeader>
						{/*<img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-full w-20 h-20"/>-->*/}
						<img
							src="https://cdn.vox-cdn.com/thumbor/SwcC3EUYhS7CvzpU-j6ilklwVsI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24328229/g95schero.jpg"></img>
						<DrawerTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
							elit.</DrawerTitle>
						<DrawerDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing
							elit. Bibendum bibendum natoque primis id vehicula libero nulla.<br></br><br></br>Lorem
							ipsum odor amet, consectetuer adipiscing elit. Sagittis condimentum facilisis sollicitudin
							odio auctor. Molestie habitant pretium sed semper taciti ullamcorper eget consequat. Nibh
							taciti ante litora odio ipsum venenatis. Interdum diam adipiscing porttitor volutpat
							habitant. Semper porta eget maximus justo magna; nisi tincidunt
							inceptos.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
            <a href="https://example.com" target="_blank" className={buttonVariants({ variant: "secondary" })}>Read More</a>
            <a href="/chat" target="_blank" className={buttonVariants({ variant: "outline" })}>Ask Benjy</a>
						<DrawerClose>

						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

			<Drawer>
				<DrawerTrigger>
					<Card className="news-card">
						<CardHeader>
							<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
								elit.</CardTitle>
							<CardDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing
								elit. Bibendum bibendum natoque primis id vehicula libero nulla.</CardDescription>
						</CardHeader>
					</Card>
				</DrawerTrigger>
				<DrawerContent className="article-content">
					<DrawerHeader>
						{/*<img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-full w-20 h-20"/>-->*/}
						<img
							src="https://cdn.vox-cdn.com/thumbor/SwcC3EUYhS7CvzpU-j6ilklwVsI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24328229/g95schero.jpg"></img>
						<DrawerTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
							elit.</DrawerTitle>
						<DrawerDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing
							elit. Bibendum bibendum natoque primis id vehicula libero nulla.<br></br><br></br>Lorem
							ipsum odor amet, consectetuer adipiscing elit. Sagittis condimentum facilisis sollicitudin
							odio auctor. Molestie habitant pretium sed semper taciti ullamcorper eget consequat. Nibh
							taciti ante litora odio ipsum venenatis. Interdum diam adipiscing porttitor volutpat
							habitant. Semper porta eget maximus justo magna; nisi tincidunt
							inceptos.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						  <a href="https://example.com" target="_blank" className={buttonVariants({ variant: "secondary" })}>Read More</a>
						  <Button>Talk to Benjy</Button>
						<DrawerClose>

						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Drawer>
				<DrawerTrigger>
					<Card className="news-card">
						<CardHeader>
							<CardTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
								elit.</CardTitle>
							<CardDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing
								elit. Bibendum bibendum natoque primis id vehicula libero nulla.</CardDescription>
						</CardHeader>
					</Card>
				</DrawerTrigger>
				<DrawerContent className="article-content">
					<DrawerHeader>
						{/*<img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-full w-20 h-20"/>-->*/}
						<img
							src="https://cdn.vox-cdn.com/thumbor/SwcC3EUYhS7CvzpU-j6ilklwVsI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24328229/g95schero.jpg"></img>
						<DrawerTitle className="article-title">Lorem ipsum odor amet, consectetuer adipiscing
							elit.</DrawerTitle>
						<DrawerDescription className="article-summary">Lorem ipsum odor amet, consectetuer adipiscing
							elit. Bibendum bibendum natoque primis id vehicula libero nulla.<br></br><br></br>Lorem
							ipsum odor amet, consectetuer adipiscing elit. Sagittis condimentum facilisis sollicitudin
							odio auctor. Molestie habitant pretium sed semper taciti ullamcorper eget consequat. Nibh
							taciti ante litora odio ipsum venenatis. Interdum diam adipiscing porttitor volutpat
							habitant. Semper porta eget maximus justo magna; nisi tincidunt
							inceptos.</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						  <a href="https://example.com" target="_blank" className={buttonVariants({ variant: "secondary" })}>Read More</a>
						  <Button>Talk to Benjy</Button>
						<DrawerClose>

						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</main>
    <div className="navbar">
       <li><a href = "/">News</a></li>
       <li><a href = "/account">Account</a></li>
       <li><a href = "/bookmarks">Bookmarks</a></li>
       <li><a href = "/search">Search</a></li>
		</div>
	</div>


  );

}

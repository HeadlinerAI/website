import {
    Button
} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Input
} from "@/components/ui/input"
import {
    Label
} from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { CardsChat } from "@/components/ui/chat";
import { Car } from "lucide-react"

export default function Chat() {
  return (

    <div className="min-h-screen w-screen font-[family-name:var(--font-geist-sans)] chat">
      <main className="flex flex-grow h-14 items-center sm:items-start">

        < CardsChat / >
        
      </main>
      <div className = "navbar">
            <li><a href = "/">News</a></li>
            <li><a href = "/account">Account</a></li>
            <li><a href = "/bookmarks">Bookmarks</a></li>
            <li><a href = "/search">Search</a></li>
        </div>
    </div>
  );
}

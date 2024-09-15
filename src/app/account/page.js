import Image from "next/image";
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  

export default function Home() {
  return (
    <div className="min-h-screen w-screen font-[family-name:var(--font-geist-sans)]">
     
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className = "accInfo">
        <div className = "headContainer">
            <div className = "avatar">      
                <img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-full w-20 h-20"/>
            </div>
            <div className="accHeadText">
                <h1>My Account</h1>
                <h2>Other information about the user. mayber a short one or two sentences, or could be a list of random info like email, etc. Maybe it lists preferences?</h2>
            </div>
        </div>
        <br></br>
            <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                            </AccordionContent>
                    </AccordionItem>
                </Accordion>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        </div>
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

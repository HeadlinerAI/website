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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>My Account</h1>
     
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div class = "accInfo">
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
      <ul class = "navbar">
          <li><a href = "/account">Account</a></li>
          <li><a href = "/">News</a></li>
          <li><a href = "/bookmarks">Bookmarks</a></li>
          <li><a href = "/search">Search</a></li>
        </ul>
    </div>
  );
}

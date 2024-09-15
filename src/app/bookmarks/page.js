import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
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

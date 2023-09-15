'use client'
import Image from "next/image"
import Link from "next/link";
import { useState, useRef } from "react"

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleKeyDown = (e: any) => {
    if (e.code === "Enter" && linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div className="flex-initial w-96 mx-6 border border-slate-600 rounded-full hidden md:flex py-1 pr-4">
      <Link ref={linkRef} href={{
        pathname: "/catalog",
        query: {search: searchInput}
      }} className="flex-none">
        <button className="ml-1 flex-none hover:bg-gray-100 rounded-full p-2 ease-in duration-100">
          <Image src="/images/general/search.png" width={18} height={10} alt="search" className="h-auto" />
        </button>
      </Link>
      <input value={searchInput} onKeyDown={handleKeyDown} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search..." className="w-full outline-none" />
    </div>
  )
}
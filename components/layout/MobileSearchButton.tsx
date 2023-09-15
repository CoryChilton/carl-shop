'use client';
import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function MobileSearchButton() {
  const [showSearchbar, setShowSearchBar] = useState(false);

  return (
    <div>
      <button className="ml-1 flex-none hover:bg-gray-100 rounded-full p-3 ease-in-out duration-100 block md:hidden">
        <Image src="/images/general/search.png" width={18} height={10} alt="search"/>
      </button>
      {/* <SearchBar /> */}
    </div>
  )
}
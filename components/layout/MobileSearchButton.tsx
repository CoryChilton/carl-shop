'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";

export default function MobileSearchButton() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hide, setHide] = useState(true);

  //Close the menu when you click outside of it
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu, true);
  }, []);

  const refMobileSearch = useRef<HTMLDivElement>(null);

  const handleClickOutsideMenu = (e: any) => {
    if(!refMobileSearch.current?.contains(e.target)) {
      setShowSearchBar(false);
    }
  }
  

  return (
    <div ref={refMobileSearch} onAnimationEnd={() => setHide(!hide)} className="md:hidden relative">
      <button onClick={() => setShowSearchBar(!showSearchBar)} className="ml-1 flex-none hover:bg-gray-100 rounded-full p-3 ease-in-out duration-100 block">
        <Image src="/images/general/search.png" width={18} height={10} alt="search"/>
      </button>
      <SearchBar className={`flex-initial w-48 flex md:hidden absolute top-10 -right-5 bg-white ${showSearchBar ? "animate-fadeInMenu" : "animate-fadeOutMenu"} ${(hide && !showSearchBar) && "hidden"} fill-mode-forwards`} />
    </div>
  )
}
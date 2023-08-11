'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenuButton() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShowFullMenu(!showFullMenu)} className="hover:bg-gray-100 rounded-full ease-in duration-100 py-2 px-3 block md:hidden">
        <Image src="/images/hamburger.png" width={22} height={20} alt="Mobile Menu"/>
      </button>
      {showFullMenu && (
        <MobileMenu />
      )}
    </div>
  )
}

function MobileMenu() {
  return (
    <div className="border border-black absolute top-10 right-0 bg-white z-10">
      <Link className="block" href="/">Home</Link>
      <Link className="block" href="/catalog">Catalog</Link>
      <Link className="block" href="/support">Support</Link>
      <Link className="block whitespace-nowrap" href="/sizeguide">Size Guide</Link>
    </div>
  )
}


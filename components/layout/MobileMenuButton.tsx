'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenuButton() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShowFullMenu(!showFullMenu)} className="hover:bg-gray-100 rounded-full ease-in duration-100 py-2 px-3 block md:hidden">
        <Image src="/images/general/hamburger.png" width={22} height={20} alt="Mobile Menu"/>
      </button>
      {showFullMenu && (
        <MobileMenu close={() => setShowFullMenu(false)} />
      )}
    </div>
  )
}

function MobileMenu( {close} : {close:() => void} ) {
  return (
    <div className="bg-gray-100 border border-black z-10 absolute -right-8 top-24 animate-mobileMenu h-screen w-screen flex flex-col items-end">
      <button onClick={close}>Close</button>
      <Link href="/">Login</Link>
      <Link href="/">Home</Link>
      <Link href="/catalog">Catalog</Link>
      <Link href="/support">Support</Link>
      <Link href="/sizeguide">Size Guide</Link>
    </div>
  )
}


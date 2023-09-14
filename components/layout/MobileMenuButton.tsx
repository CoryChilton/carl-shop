'use client'
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";

export default function MobileMenuButton() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setShowFullMenu(!showFullMenu)} className="hover:bg-gray-100 rounded-full ease-in duration-100 py-2 px-3 block md:hidden">
        <Image src="/images/general/hamburger.png" width={22} height={20} alt="Mobile Menu"/>
      </button>
      <MobileMenu close={() => setShowFullMenu(false)} show={showFullMenu} />
    </div>
  )
}

function MobileMenu( {close, show} : {close:() => void, show: boolean} ) {
  const hasShown = useRef(false);
  if (show) {hasShown.current = true;}
  return (
    <div className={`bg-white text-gray-800 rounded-xl border-2 border-black z-10 absolute -left-40 right-0 top-12 py-2 animate-fadeInMenu flex flex-col items-center ${!hasShown.current && 'hidden'} ${show ? 'animate-fadeInMenu' : 'animate-fadeOutMenu'} fill-mode-forwards md:hidden`}>
      <Image onClick={close} src="/images/general/x.png" width={30} height={30} alt="Close Menu" className="absolute top-1 right-1"/>
      <MobileMenuOption close={close} href="/">Home</MobileMenuOption>
      <MobileMenuOption close={close} href="/catalog">Catalog</MobileMenuOption>
      <MobileMenuOption close={close} href="/support">Support</MobileMenuOption>
      <MobileMenuOption close={close} href="/sizeguide">Size Guide</MobileMenuOption>
      <MobileMenuOption close={close} href="/">Login</MobileMenuOption>
    </div>
  )
}

function MobileMenuOption({children, href, close}: {children: string, href: string, close:() => void}) {
  return (
    <Link onClick={close} href={href} className="text-2xl font-extralight">{children}</Link>
  )
}
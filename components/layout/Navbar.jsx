import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import MobileMenuButton from './MobileMenuButton';
import MobileSearchButton from './MobileSearchButton';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-40 text-slate-600 font-light">
      <div className="flex-none flex items-center gap-x-8">
        <Link href="/" className="pl-2">
          <Image src="/images/carlLogo.jpg" alt="CARL Logo" width={100} height={200} className="h-auto" />
        </Link>
        <NavButton href="/">Home</NavButton>
        <NavButton href="/catalog">Catalog</NavButton>
        <NavButton href="/support">Support</NavButton>
        <NavButton href="/sizeguide">Size Guide</NavButton>
      </div>
      <SearchBar className="flex-initial w-96 mx-6 hidden md:flex" />
      <div className="flex-none flex gap-x-0 md:gap-x-6 mr-8 items-center">
        <NavButton href="/login">Login</NavButton>
        <MobileSearchButton />
        <Link href="/cart">
          <button className="hover:bg-gray-100 rounded-full ease-in duration-100 p-3">
            <Image src="/images/general/cart.png" width={22} height={20} alt="Cart" className="h-auto" />
          </button>
        </Link>
        <MobileMenuButton />
      </div>
    </nav>
  );
}

function NavButton({children, href}) {
  return <Link href={href} className="hover:text-black ease-in-out duration-100 hidden md:block">{children}</Link>;
}
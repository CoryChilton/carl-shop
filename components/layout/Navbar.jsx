import Image from 'next/image';
import Link from 'next/link';
import MobileMenuButton from '../home/MobileMenuButton';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-40 text-slate-600 font-light">
      <div className="flex-none flex items-center gap-x-8">
        <Link href="/" className="pl-2">
          <Image src="/images/carlLogo.jpg" alt="CARL Logo" width={100} height={200} />
        </Link>
        <NavButton href="/">Home</NavButton>
        <NavButton href="/catalog">Catalog</NavButton>
        <NavButton href="/support">Support</NavButton>
        <NavButton href="/sizeguide">Size Guide</NavButton>
      </div>
      <div className="flex-initial w-96 mx-6 border border-slate-600 rounded-full hidden md:flex py-1 pr-4">
        <button className="ml-1 flex-none hover:bg-gray-100 rounded-full p-2 ease-in duration-100">
          <Image src="/images/search.png" width={18} height={10} alt="search"/>
        </button>
        <input placeholder="Search..." className="w-full outline-none" />
      </div>
      <div className="flex-none flex gap-x-0 md:gap-x-6 mr-8 items-center">
        <NavButton href="/">Login</NavButton>
        <button className="ml-1 flex-none hover:bg-gray-100 rounded-full p-3 ease-in-out duration-100 block md:hidden">
          <Image src="/images/search.png" width={18} height={10} alt="search"/>
        </button>
        <button className="hover:bg-gray-100 rounded-full ease-in duration-100 p-3">
          <Image src="/images/cart.png" width={22} height={20} alt="Cart"/>
        </button>
        <MobileMenuButton />
      </div>
    </nav>
  );
}

function NavButton({children, href}) {
  return <Link href={href} className="hover:text-black ease-in-out duration-100 hidden md:block">{children}</Link>;
}
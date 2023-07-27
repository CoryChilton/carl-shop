import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="text-white flex flex-col md:flex-row justify-evenly gap-y-6 pb-10 pt-8 items-center md:items-start">
        <div className="flex flex-col items-center md:items-start flex-initial w-full md:w-80 border-slate-400 border p-3">
          <div className="font-semibold">STORE INFORMATION</div>
          <FooterBreakLine />
          <Image src="/images/carlLogo.jpg" width={100} height={100} alt="CARL Logo" className="mt-2 mb-4 rounded-3xl"/>
          <div className="font-medium mb-2">CARL&apos;s Closet</div>
          <div className="font-extralight text-center md:text-start">Shop the official merchandise created by CARL. Support the California Roundnet Legion movement.<br/>Shop CARL.</div>
        </div>
        <div className="flex flex-col flex-none border-slate-400 border p-3 w-full md:w-fit items-center md:items-start">
          <div className="font-semibold">HELP & INFORMATION</div>
          <FooterBreakLine />
          <ul className="font-light w-full text-center md:text-start">
            <li>About us</li> <FooterDivLine />
            <li> <Link href="https://californiaround.net/blog" target="_blank">Blog</Link></li> <FooterDivLine />
            <li>Contact Us</li> <FooterDivLine />
            <li>Size Guide</li> <FooterDivLine />
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col flex-none border-slate-400 border p-3 w-full md:w-fit items-center md:items-start">
          <div className="font-semibold">CUSTOMER SERVICES</div>
          <FooterBreakLine />
          <ul className="font-light w-full text-center md:text-start">
            <li>Returns and Refunds Policy</li> <FooterDivLine />
            <li>Privacy Policy</li> <FooterDivLine />
            <li>Terms of Service</li> <FooterDivLine />
            <li>Payment Policy</li> <FooterDivLine />
            <li>Shipping Policy</li>
          </ul>
        </div>
      </div>
        <div className="text-gray-600 text-center font-semibold text-sm pb-4">Clothing designs by The Podiatrist.<br/> &#9787; 2023 CARL Official. CARL rights reserved.</div>
    </div>
  );
}

function FooterBreakLine() {
  return <div className="w-8 h-1 bg-slate-600 my-3"></div>;
}

function FooterDivLine() {
  return <div className="w-full h-px bg-slate-900 my-1"></div>;
}
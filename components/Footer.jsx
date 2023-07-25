import Image from 'next/image'

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row justify-evenly gap-y-6 pb-10 pt-8 items-center md:items-start">
      <div className="flex flex-col flex-initial w-full md:w-80 border-slate-400 border p-3">
        <div className="font-semibold">STORE INFORMATION</div>
        <FooterBreakLine />
        <Image src="/images/carlLogo.jpg" width={100} height={100} alt="CARL Logo" className="mt-2 mb-4 rounded-3xl"/>
        <div className="font-medium mb-2">CARL Official Store</div>
        <div className="font-extralight">Shop the official merchandise created by CARL. Support the California Roundnet Legion movement.<br />Shop Carl.</div>
      </div>
      <div className="flex flex-col flex-none border-slate-400 border p-3 w-full md:w-fit">
        <div className="font-semibold">HELP & INFORMATION</div>
        <FooterBreakLine />
        <ul className="font-light">
          <li>About us</li>
          <li>Contact Us</li>
          <li>Size Guide</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="flex flex-col flex-none border-slate-400 border p-3 w-full md:w-fit">
        <div className="font-semibold">CUSTOMER SERVICES</div>
        <FooterBreakLine />
        <ul className="font-light">
          <li>Returns and Refunds Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Payment Policy</li>
          <li>Shipping Policy</li>
        </ul>
      </div>
    </div>
  );
}

function FooterBreakLine() {
  return <div className="w-8 h-1 bg-slate-600 my-3"></div>;
}
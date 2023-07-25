import Link from 'next/link';
import Image from 'next/image';

export default function Carousel({images}) {
  return (
    <div className=" w-full overflow-x-auto py-6">
      <div className="flex animate-carousel gap-4 h-96">
        {[...images, ...images, ...images, ...images].map(image => (
          <Link key={image} href="/" className="flex-none w-2/3 md:w-1/3 bg-slate-400 flex justify-center">
            <Image src={`/images/carousel/${image}`} alt="image" width={200} height={600} className="rounded-3xl h-96 w-auto"/>
          </Link>
        ))}
      </div>
    </div>
  )
}

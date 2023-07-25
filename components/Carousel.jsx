import Link from 'next/link';
import Image from 'next/image';

export default function Carousel({images}) {
  return (
    <div className=" w-full overflow-x-auto py-4">
      <div className="flex animate-carousel gap-4 h-96">
        {[...images, ...images, ...images, ...images].map(image => (
          <Link key={image} href="/" className="flex-none w-2/3 md:w-1/2 lg:w-1/3 bg-blue-200 flex justify-center items-center rounded-xl">
            <div className="">
              <img src={`/images/carousel/${image}`} alt="image" className="h-72 hover:h-80 ease-in-out duration-100"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

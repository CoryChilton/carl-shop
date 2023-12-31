import Link from 'next/link';
import Image from 'next/image';

export default function Carousel({items}) {
  return (
    <div className=" w-full overflow-x-auto py-4">
      <div className="flex animate-carousel gap-4 sm:h-96 h-80">
        {[...items, ...items].map(item => (
          <Link key={item.carouselImagePath} href={`/${item.id}`} className="flex-none w-2/3 md:w-1/2 lg:w-1/3 bg-blue-200 flex relative justify-center items-center rounded-xl">
            <div className="">
              <img src={item.carouselImagePath} alt="image" className="h-52 active:h-48 sm:h-72 sm:hover:h-80 sm:active:h-72 ease-in-out duration-100"/>
            </div>
            <div className="absolute bottom-1 left-1 border border-black rounded-full pl-2 pr-1 py-1 bg-blue-200 sm:text-base text-sm">
              <div className="inline-block font-light">
                {item.name}
              </div>
              <div className="inline-block bg-blue-500 ml-2 rounded-full px-2 py-1 hover:bg-blue-400 ease-in-out duration-100">
                ${item.price}.00
              </div>
            </div>
            {item.quantity === 0 && (
              <div className="absolute text-red-700 top-1 left-2 font-semibold">Out of Stock!</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}



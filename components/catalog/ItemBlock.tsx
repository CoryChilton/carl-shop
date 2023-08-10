'use client'
import { useState } from 'react';
import Image from 'next/image';
import { ItemConfig } from '@/data/items';

export default function ItemBlock( {item} : {item: ItemConfig} ) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} className="border border-black rounded-2xl aspect-[11/15] py-6 px-4 hover:scale-105 duration-200 ease-linear relative">
      <Image src={item.carouselImagePath} width={1000} height={300} alt="image" className="h-2/3 object-contain" />
      <div className="h-1/3 mt-6">
        <h1 className={`text-lg font-semibold ${mouseOver && "underline"}`}>{item.name} {item.type}</h1>
        <h2 className="text-lg font-sans font-light mt-3">${item.price}.00</h2>
        {item.quantity === 0 && (
          <div className="text-red-700 absolute top-1 left-2 font-semibold">Out of Stock!</div>
        )}
      </div>
    </div>
  )
}
'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function ClickCarousel ( {images} ) {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    if (index >= images.length - 1) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (index <= 0) {
      setIndex(images.length - 1);
    }
    else {
      setIndex(index - 1);
    }
  }
  
  let image = images[index];

  return (
    <div className="md:w-3/5 relative flex justify-center h-[30rem]">
      <div className="h-[30rem] flex items-center">
        <img src={image} alt="image" className="max-h-full rounded" />
      </div>
      <div className="absolute left-0 w-1/2 h-full flex items-center">
        <button onClick={handlePrevClick} className="opacity-50 hover:opacity-70 active:opacity-80">
          <div className="bg-gray-500 rounded-full pr-1 py-0.5">
            <Image src={'/images/next.png'} width={50} height={50} className="rotate-180" />
          </div>
        </button>
      </div>
      <div className="absolute right-0 w-1/2 h-full flex items-center justify-end">
        <button onClick={handleNextClick} className="opacity-50 hover:opacity-70 active:opacity-80">
          <div className="bg-gray-500 rounded-full pl-1 py-0.5">
            <Image src={'/images/next.png'} width={50} height={50}/>
          </div>
        </button>
      </div>
    </div>
  );
}
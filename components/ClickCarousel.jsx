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
    <div className="w-1/3 relative flex justify-center">
      <div className="h-96 flex items-center">
        <img src={image} alt="image" className="max-h-full" />
      </div>
      <button onClick={handlePrevClick} className="opacity-50 hover:opacity-70 absolute left-0 bottom-44">
        <Image src={'/images/next.png'} width={50} height={50} className="rotate-180" />
      </button>
      <button onClick={handleNextClick} className="opacity-50 hover:opacity-70 absolute right-0 bottom-44">
        <Image src={'/images/next.png'} width={50} height={50}/>
      </button>
    </div>
  );
}
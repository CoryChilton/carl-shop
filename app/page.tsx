import Image from 'next/image';
import Link from 'next/link';
import { items } from '../items/items';
import Carousel from '../components/Carousel';
import Suspense from 'react';

const carouselImages = ['lightningMcDean2.png', 'playerSafety2.png', 'vegasJersey1.png', 'IBS1.png',];

export default function Home() {
  return (
    <main>
      <Image src="/images/lineup.jpg" priority={true} width={2000} height={1000} alt="Lineup" className="w-full"/>
      <Carousel images={carouselImages}/>
    </main>
  );
}



import Image from 'next/image';
import Link from 'next/link';
import { items } from '../items/items';
import Carousel from '../components/Carousel';

export default function Home() {
  const carouselItems = ( Array.from(items.values()) ).filter((item) => item.carouselImagePath !== '');

  return (
    <main>
      <Image src="/images/lineup.jpg" priority={true} width={2000} height={1000} alt="Lineup" className="w-full" />
      <Carousel items={carouselItems}/>
    </main>
  );
}



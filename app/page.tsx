import Image from 'next/image';
import Link from 'next/link';
import { items } from '../data/items';
import Carousel from '../components/home/Carousel';

export default function Home() {
  const carouselItems = ( Array.from(items.values()) ).filter((item) => item.carouselImagePath !== '');

  return (
    <main>
      <Image src="/images/lineupBackShort.jpg" priority={true} width={2000} height={1000} alt="Lineup" className="w-full hidden md:block" />
      <Image src="/images/lineupBackTall.jpg" priority={true} width={2000} height={1000} alt="Lineup" className="w-full md:hidden" />
      <Carousel items={carouselItems}/>
    </main>
  );
}



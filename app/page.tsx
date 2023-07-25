import Image from 'next/image';
import Link from 'next/link';
import { items } from '../items/items';

export default function Home() {
  return (
    <main>
      <Image src="/images/lineup.jpg" width={2000} height={1000} alt="Lineup" className="w-full"/>
      
      <section>
        <br></br>
        {items.map(( {name, price, quantity, description, imagePath} ) => 
          <div key={name}>
            <Image src={imagePath} width={100} height={100} alt="image"/>
            <h1>{name}</h1>
            <p>${price}</p>
            <p>{quantity} Left!</p>
            <p>{description}</p>
            <br></br>
          </div>
        )}
      </section>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { items } from '../items/items'

export default function Home() {
  return (
    <main>
      <section className="font-sans">
        <h1>CARL Store</h1>
        <p>Welcome to the official merchandise store of the California Roundnet Legion!</p>
      </section>
      <section className='items'>
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

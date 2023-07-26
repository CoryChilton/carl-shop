'use client'
import SizeSelect from './SizeSelect'
import QuantitySelect from './QuantitySelect'
import { useState } from 'react';

export default function ItemInfoAndOptions({item}) {
  const [quantity, setQuantity] = useState(1);
  let total = item.price * quantity;

  return (
    <>
      <h1>{item.name}</h1>
      <h2>{item.description}</h2>
      <SizeSelect />
      <h3>Price: ${item.price}.00</h3>

      <QuantitySelect onIncrease={() => setQuantity(quantity+1)} onDecrease={() => quantity > 0 && setQuantity(quantity-1)} quantity={quantity} />

      <h3>Total: ${total}.00</h3>
      <button className="block">Add to Cart</button>
      <button className="block">Buy Now</button>
    </>
  )
}
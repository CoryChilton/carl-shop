'use client'
import { useState } from 'react';

export default function QuantitySelect() {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <button onClick={() => quantity > 0 && setQuantity(quantity-1)}>-</button>
      <h1>{quantity}</h1>
      <button onClick={() => setQuantity(quantity+1)}>+</button>
    </>
  )
}
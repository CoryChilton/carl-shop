'use client'
import SizeSelect from './SizeSelect'
import QuantitySelect from './QuantitySelect'
import { useState } from 'react';

export default function ItemInfoAndOptions({item}) {
  const initialQuantity = item.quantity === 0 ? 0 : 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  let total = item.price * quantity;

  return (
    <div className="md:w-2/5">
      <h1 className="text-3xl font-semibold mb-4">{item.name} {item.type}</h1>
      <h2 className="text-lg mb-4">{item.description}</h2>
      <h3 className="text-lg font-semibold mb-4">Price: ${item.price}.00</h3>
      <SizeSelect />
      <QuantitySelect onIncrease={() => setQuantity(quantity+1)} onDecrease={() => quantity > 1 && setQuantity(quantity-1)} quantity={quantity} />
      {item.quantity===0 && (
        <div className="text-red-500 mb-4 text-lg font-semibold">Out of Stock!</div>
      )}
      <h3 className="text-2xl font-semibold flex justify-between bg-gray-100 mb-4 items-center p-2 border-t border-gray-400">
        <div className="text-xl">
          Total:
        </div>
        <div className="text-red-500">
          ${total}.00
        </div>
      </h3>
      <button className="block bg-red-700 text-white font-bold w-full h-14 hover:bg-black active:bg-red-950 ease-in duration-200">ADD TO CART</button>
    </div>
  )
}
'use client'
import { useState } from 'react';

export default function SizeSelect() {
  const [size, setSize] = useState('S')

  return (
    <>
      <h3>Size: {size}</h3>
      <button onClick={() => setSize('S')}>S</button>
      <button onClick={() => setSize('M')}>M</button>
      <button onClick={() => setSize('L')}>L</button>
      <button onClick={() => setSize('XL')}>XL</button>
    </>
  )
}
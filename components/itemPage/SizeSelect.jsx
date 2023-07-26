'use client'
import { useState } from 'react';

export default function SizeSelect() {
  const [size, setSize] = useState('S')

  return (
    <div className="mb-7">
      <h3>Size: <p className="text-red-600 inline-block mb-2">{size}</p></h3>
      <SizeButton onClick={() => setSize('S')}>S</SizeButton>
      <SizeButton onClick={() => setSize('M')}>M</SizeButton>
      <SizeButton onClick={() => setSize('L')}>L</SizeButton>
      <SizeButton onClick={() => setSize('XL')}>XL</SizeButton>
    </div>
  )
}

function SizeButton({onClick, children}) {
  return (
    <button onClick={onClick} className="text-lg border border-black rounded-md h-8 w-8 mr-1 hover:bg-slate-100 active:bg-slate-200 ease-in-out duration-100">
      {children}
    </button>
  )
}
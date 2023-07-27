'use client'
import { useState } from 'react';

export default function SizeSelect() {
  const [size, setSize] = useState('S')

  return (
    <div className="mb-7">
      <h3>Size: <p className="text-red-600 inline-block mb-2">{size}</p></h3>
      <SizeButton selected={size==='S'} onClick={() => setSize('S')}>S</SizeButton>
      <SizeButton selected={size==='M'} onClick={() => setSize('M')}>M</SizeButton>
      <SizeButton selected={size==='L'} onClick={() => setSize('L')}>L</SizeButton>
      <SizeButton selected={size==='XL'} onClick={() => setSize('XL')}>XL</SizeButton>
    </div>
  )
}

function SizeButton({selected, onClick, children}) {
  return (
    <button onClick={onClick} className={`${selected && "bg-slate-200 shadow-lg"} text-lg border border-black rounded-md h-10 w-10 mr-1 active:bg-slate-200 ease-in-out duration-100 relative`}>
      {children}
    </button>
  )
}
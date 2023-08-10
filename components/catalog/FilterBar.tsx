'use client'
import { useState } from 'react';

export default function FilterBar({ inStockChecked, checkInStock } : { inStockChecked : boolean, checkInStock : () => void }) {
  const [showAvailabilityMenu, setShowAvailabilityMenu] = useState(false);
  const [showPriceMenu, setShowPriceMenu] = useState(false);
  const clickAvailability = () => {setShowAvailabilityMenu(!showAvailabilityMenu); setShowPriceMenu(false);}
  const clickPrice = () => {setShowPriceMenu(!showPriceMenu); setShowAvailabilityMenu(false);}


  return (
    <div className="relative">
      <div className="inline-block">
        Filter: 
      </div>
      <button onClick={clickAvailability} className="inline-block">
        Availability
      </button>
      {showAvailabilityMenu && <AvailabilityMenu inStockChecked={inStockChecked} checkInStock={checkInStock} />}
      <button onClick={clickPrice} className="inline-block">
        Price
      </button>
      {showPriceMenu && <PriceMenu />}
    </div>
  );
}

function AvailabilityMenu( {inStockChecked, checkInStock} : {inStockChecked: boolean, checkInStock: () => void} ) {
  return (
    <div className="border border-black h-24 w-48 absolute top-5 left-5">
      <input type="checkbox" checked={inStockChecked} onClick={checkInStock}/>
      <div>
        In Stock
      </div>
    </div>
  )
}

function PriceMenu() {
  return (
    <div className="border border-black h-24 w-48 absolute top-5 left-44">
      Price Menu
    </div>
  )
}
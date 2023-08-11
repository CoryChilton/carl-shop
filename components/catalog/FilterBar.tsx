'use client'
import { useState } from 'react';
import { filterOptionsInterface } from '@/app/catalog/page';
import AvailabilityMenu from './AvailabilityMenu';
import PriceMenu from './PriceMenu';
import Image from 'next/image';

export default function FilterBar({ 
  filterOptions,
  checkInStock, 
  changeMinPrice, 
  changeMaxPrice,
  resetFilters
} : { 
  filterOptions : filterOptionsInterface,
  checkInStock : () => void,
  changeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
  changeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
  resetFilters: () => void
}) {
  const [showAvailabilityMenu, setShowAvailabilityMenu] = useState(false);
  const [showPriceMenu, setShowPriceMenu] = useState(false);
  const clickAvailability = () => {setShowAvailabilityMenu(!showAvailabilityMenu); setShowPriceMenu(false);}
  const clickPrice = () => {setShowPriceMenu(!showPriceMenu); setShowAvailabilityMenu(false);}

  return (
    <div className="relative flex gap-8">
      <div className="">
        Filter: 
      </div>
      <button onClick={clickAvailability} className="opacity-75 hover:opacity-100 duration-100 ease-in">
        <div className="inline-block mr-2">
          Availability
        </div>  
        <Image className="inline-block" src="/images/general/caret.png" width={18} height={18} alt="caret" />
      </button>
      {showAvailabilityMenu && (
        <AvailabilityMenu inStockChecked={filterOptions.inStockChecked} checkInStock={checkInStock} />
      )}
      <button onClick={clickPrice} className="opacity-75 hover:opacity-100 duration-100 ease-in">
        <div className="inline-block mr-2">
          Price
        </div>
        <Image className="inline-block" src="/images/general/caret.png" width={18} height={18} alt="caret" />
      </button>
      {showPriceMenu && (
        <PriceMenu priceMin={filterOptions.priceMin} priceMax={filterOptions.priceMax} changeMaxPrice={changeMaxPrice} changeMinPrice={changeMinPrice} />
      )}
      <button onClick={resetFilters} className="opacity-75 hover:opacity-100 duration-100 ease-in">
        Reset Filters
      </button>
    </div>
  );
}




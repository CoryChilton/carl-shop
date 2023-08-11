'use client'
import { useState } from 'react';
import { filterOptionsInterface } from '@/app/catalog/page';
import AvailabilityMenu from './AvailabilityMenu';
import PriceMenu from './PriceMenu';

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
    <div className="relative">
      <div className="inline-block">
        Filter: 
      </div>
      <button onClick={clickAvailability} className="inline-block ml-10">
        Availability
      </button>
      {showAvailabilityMenu && (
        <AvailabilityMenu inStockChecked={filterOptions.inStockChecked} checkInStock={checkInStock} />
      )}
      <button onClick={clickPrice} className="inline-block ml-10">
        Price
      </button>
      {showPriceMenu && (
        <PriceMenu priceMin={filterOptions.priceMin} priceMax={filterOptions.priceMax} changeMaxPrice={changeMaxPrice} changeMinPrice={changeMinPrice} />
      )}
      <button onClick={resetFilters} className="inline-block ml-10">
        Reset Filters
      </button>
    </div>
  );
}




'use client'
import { useState, useRef, useEffect } from 'react';
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
  const clickAvailability = () => {setShowAvailabilityMenu(!showAvailabilityMenu); setShowPriceMenu(false)};
  const clickPrice = () => {setShowPriceMenu(!showPriceMenu); setShowAvailabilityMenu(false)};

  //Close the availability and price menu when you click outside of them
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu, true);
  }, [])

  const refAvailabilityMenu = useRef();
  const refPriceMenu = useRef();

  const handleClickOutsideMenu = (e: any) => {
    if(!refAvailabilityMenu.current?.contains(e.target) && !refPriceMenu.current?.contains(e.target)) {
      setShowAvailabilityMenu(false);
      setShowPriceMenu(false);
    }
  }

  return (
    <div className="flex gap-8">
      <div className="">
        Filter: 
      </div>
      <div ref={refAvailabilityMenu} className="relative">
        <button onClick={clickAvailability} className="opacity-75 hover:opacity-100 duration-100 ease-in">
          <div className="inline-block mr-2">
            Availability
          </div>  
          <Image className="inline-block" src="/images/general/caret.png" width={18} height={18} alt="caret" />
        </button>
        <div>
          <AvailabilityMenu inStockChecked={filterOptions.inStockChecked} checkInStock={checkInStock} show={showAvailabilityMenu} />
        </div>
      </div>
      <div ref={refPriceMenu} className="relative">
        <button onClick={clickPrice} className="opacity-75 hover:opacity-100 duration-100 ease-in">
          <div className="inline-block mr-2">
            Price
          </div>
          <Image className="inline-block" src="/images/general/caret.png" width={18} height={18} alt="caret" />
        </button>
        <div>
          <PriceMenu priceMin={filterOptions.priceMin} priceMax={filterOptions.priceMax} changeMaxPrice={changeMaxPrice} changeMinPrice={changeMinPrice} show={showPriceMenu} />
        </div>
      </div>
      <button onClick={resetFilters} className="opacity-75 hover:opacity-100 duration-100 ease-in">
        Reset Filters
      </button>
    </div>
  );
}




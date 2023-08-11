'use client'
import { items } from "@/data/items"
import FilterBar from "@/components/catalog/FilterBar";
import ItemGrid from "@/components/catalog/ItemGrid";
import { useState } from 'react';

const catalogItems = Array.from(items.values());

export default function Catalog() {

  const [filterOptions, setFilterOptions] = useState({
    inStockChecked: false,
    priceMin: 0,
    priceMax: Infinity
  });

  const checkInStock = () => setFilterOptions({
    ...filterOptions,
    inStockChecked: !filterOptions.inStockChecked
  });

  function changeMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
    let newPriceMin = Number(e.target.value);
    if (Number.isNaN(newPriceMin)) {
      newPriceMin = filterOptions.priceMin;
    }
    setFilterOptions({
      ...filterOptions,
      priceMin: newPriceMin
    })
  }

  function changeMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
    let newPriceMax = Number(e.target.value);
    if (Number.isNaN(newPriceMax)) {
      newPriceMax = filterOptions.priceMax;
    }
    else if (newPriceMax === 0) {
      newPriceMax = Infinity;
    }
    setFilterOptions({
      ...filterOptions,
      priceMax: newPriceMax
    })
  }

  return (
    <>
      <FilterBar filterOptions={filterOptions} checkInStock={checkInStock} changeMinPrice={changeMinPrice} changeMaxPrice={changeMaxPrice} />
      <ItemGrid items={catalogItems} filterOptions={filterOptions} />
    </>
  );
}

export interface filterOptionsInterface{
  inStockChecked: boolean,
  priceMin: number,
  priceMax: number
}


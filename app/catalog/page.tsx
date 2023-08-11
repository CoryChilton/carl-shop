'use client'
import { items } from "@/data/items"
import FilterBar from "@/components/catalog/FilterBar";
import SortBar from "@/components/catalog/SortBar";
import ItemGrid from "@/components/catalog/ItemGrid";
import { useState } from 'react';

const catalogItems = Array.from(items.values());

export default function Catalog() {

  const [sortOption, setSortOption] = useState("Featured")
  const [filterOptions, setFilterOptions] = useState({
    inStockChecked: false,
    priceMin: 0,
    priceMax: Infinity
  });

  const checkInStock = () => setFilterOptions({
    ...filterOptions,
    inStockChecked: !filterOptions.inStockChecked
  });

  const resetFilters = () => setFilterOptions({
    inStockChecked: false,
    priceMin: 0,
    priceMax: Infinity
  })

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

  function changeSortOption(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOption(e.target.value);
  }

  return (
    <>
      <div className="flex flex-wrap justify-between mx-16 lg:flex-row flex-col items-center gap-y-6">
        <FilterBar filterOptions={filterOptions} checkInStock={checkInStock} changeMinPrice={changeMinPrice} changeMaxPrice={changeMaxPrice} resetFilters={resetFilters} />
        <SortBar sortOption={sortOption} changeSortOption={changeSortOption} />
      </div>
      <ItemGrid items={catalogItems} filterOptions={filterOptions} sortOption={sortOption} />
    </>
  );
}

export interface filterOptionsInterface{
  inStockChecked: boolean,
  priceMin: number,
  priceMax: number
}


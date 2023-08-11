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


  return (
    <>
      <FilterBar filterOptions={filterOptions} checkInStock={checkInStock} />
      <ItemGrid items={catalogItems} filterOptions={filterOptions} />
    </>
  );
}

export interface filterOptionsInterface{
  inStockChecked: boolean,
  priceMin: number,
  priceMax: number
}


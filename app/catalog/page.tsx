'use client'
import { items } from "@/data/items"
import FilterBar from "@/components/catalog/FilterBar";
import ItemGrid from "@/components/catalog/ItemGrid";
import { useState } from 'react';

const catalogItems = Array.from(items.values());

export default function Catalog() {

  const [inStockChecked, setInStockChecked] = useState(false);
  const checkInStock = () => setInStockChecked(!inStockChecked);


  return (
    <>
      <FilterBar inStockChecked={inStockChecked} checkInStock={checkInStock} />
      <ItemGrid items={catalogItems} inStockChecked={inStockChecked}/>
    </>
  );
}


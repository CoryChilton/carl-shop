import Link from 'next/link';
import ItemBlock from "@/components/catalog/ItemBlock";
import { ItemConfig } from '@/data/items';
import { filterOptionsInterface } from '@/app/catalog/page';

export default function ItemGrid({ 
  items, 
  filterOptions, 
  sortOption,
  searchInput
} : {
  items : ItemConfig[], 
  filterOptions: filterOptionsInterface, 
  sortOption: string,
  searchInput: string
}) {

  //Filter items based on searchInput
  if (searchInput) {
    items = items.filter((item) => (item.name.toLowerCase().includes(searchInput.toLowerCase())) || (item.type.toLowerCase().includes(searchInput.toLowerCase())));
  }

  if (items.length === 0) {
    return (
      <h2 className="text-3xl font-bold text-center text-red-700 mb-72 mt-20">
        No results were found for &quot;{searchInput}&quot;
      </h2>
    )
  }

  //Filter items based on availability and price filters
  items = items.filter((item) => (!filterOptions.inStockChecked || item.quantity) && (item.price >= filterOptions.priceMin && item.price <= filterOptions.priceMax));

  //Sort items based on sortOption
  if (sortOption === "Featured") {
    items.sort((i1, i2) => i1.id < i2.id ? -1 : 11);
  } else if (sortOption === "Alphabetically, A-Z") {
    items.sort((i1, i2) => i1.name.toLowerCase() < i2.name.toLowerCase() ? -1 : 1);
  } else if (sortOption === "Alphabetically, Z-A") {
    items.sort((i1, i2) => i1.name.toLowerCase() < i2.name.toLowerCase() ? 1 : -1);
  } else if (sortOption === "Price, low to high") {
    items.sort((i1, i2) => i1.price - i2.price);
  } else if (sortOption === "Price, high to low") {
    items.sort((i1, i2) => i2.price - i1.price);
  }

  if (items.length === 0) {
    return (
      <div className="text-center text-red-700 mb-72 mt-48">
        <div className="text-3xl font-bold mb-10">
          There are no items that match your selected filters
        </div>
        <div className="text-2xl">
          Consider resetting your filters with the &quot;Reset Filters&quot; button
        </div>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-center px-14 pt-10 pb-60">
          {items.map(item => (
            <Link key={item.id} href={`/${item.id}`}>
              <ItemBlock item={item} />
            </Link>
          ))}
    </div>
  )
}

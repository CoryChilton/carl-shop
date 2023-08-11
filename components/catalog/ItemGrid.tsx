import Link from 'next/link';
import ItemBlock from "@/components/catalog/ItemBlock";
import { ItemConfig } from '@/data/items';
import { filterOptionsInterface } from '@/app/catalog/page';


export default function ItemGrid({ items, filterOptions } : {items : ItemConfig[], filterOptions: filterOptionsInterface}) {
  //Filter items based on availability and price filters
  items = items.filter((item) => (!filterOptions.inStockChecked || item.quantity) && (item.price >= filterOptions.priceMin && item.price <= filterOptions.priceMax));

  if (items.length === 0) {
    return (
      <div className="text-center text-red-700 mb-72 mt-48">
        <div className="text-3xl font-bold mb-10">
          There are no items that match your selected filters
        </div>
        <div className="text-2xl">
          Consider resetting your filters with the "Reset Filters" button
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

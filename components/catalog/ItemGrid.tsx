import Link from 'next/link';
import ItemBlock from "@/components/catalog/ItemBlock";
import { ItemConfig } from '@/data/items';


export default function ItemGrid({ items, inStockChecked } : {items : ItemConfig[], inStockChecked: boolean}) {
  if (inStockChecked) {
    items = items.filter((item) => item.quantity)
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

import { items } from "@/data/items"
import ItemBlock from "@/components/catalog/ItemBlock";
import FilterBar from "@/components/catalog/FilterBar";
import Link from 'next/link';


const catalogItems = Array.from(items.values())

export default function Catalog() {
  return (
    <>
      <FilterBar />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-center px-14 pt-10 pb-60">
        {catalogItems.map(item => (
          <Link key={item.id} href={`/${item.id}`}>
            <ItemBlock item={item} />
          </Link>
        ))}
      </div>
    </>
  );
}


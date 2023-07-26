import { items } from '../../items/items';
import ClickCarousel from '../../components/ClickCarousel';
import ItemInfoAndOptions from '../../components/ItemInfoAndOptions';

interface pageProps{
  params: {id: string}
}

export default function Page({params}: pageProps) {

  const item = items.get(params.id);

  if (item !== undefined) {
    return (
      <main className="mb-14 mt-2 flex flex-col md:flex-row mx-10 md:mx-20 gap-8">
        <ClickCarousel images={item.imagePaths} />
        <ItemInfoAndOptions item={item} />
      </main>
    );
  } else {
    return <div>404 Page Not Found</div>;
  }
}
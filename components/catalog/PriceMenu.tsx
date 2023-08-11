export default function PriceMenu({
  priceMin, 
  priceMax, 
  changeMaxPrice, 
  changeMinPrice
} : {
  priceMin: number, 
  priceMax: number, 
  changeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  changeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
}) {
  return (
    <div className="border border-black p-2 absolute top-5 left-44 z-10 bg-white">
      <div>
        Price Menu
      </div>
      <div>
        <div>Min:</div>
        <input value={!priceMin ? '' : priceMin} onChange={changeMinPrice} placeholder="Min Price" className="border border-black p-1" />
      </div>
      <div>
        <div>Max:</div>
        <input value={priceMax === Infinity ? '' : priceMax} onChange={changeMaxPrice} placeholder="Max Price" className="border border-black p-1" />
      </div>
    </div>
  )
}
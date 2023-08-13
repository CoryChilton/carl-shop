export default function PriceMenu({
  priceMin, 
  priceMax, 
  changeMaxPrice, 
  changeMinPrice,
  show,
  animateReady,
} : {
  priceMin: number, 
  priceMax: number, 
  changeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  changeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
  show : boolean,
  animateReady: boolean,
}) {
  return (
    <div className={`${!animateReady && 'hidden'} ${show ? 'animate-fadeInMenu' : 'animate-fadeOutMenu'} border border-slate-400 p-4 absolute top-8 -left-1 z-10 bg-white rounded-2xl flex items-center fill-mode-forwards`}>
      <div className="mr-1 text-slate-600">
        $
      </div>
      <input value={!priceMin ? '' : priceMin} onChange={changeMinPrice} placeholder="From" className="border border-slate-500 p-1 pl-3 rounded-full w-20" />
      <div className="mr-1 ml-4 text-slate-600">
        $
      </div>
      <input value={priceMax === Infinity ? '' : priceMax} onChange={changeMaxPrice} placeholder="To" className="border border-slate-500 p-1 pl-3 rounded-full w-20" />
    </div>
  )
}
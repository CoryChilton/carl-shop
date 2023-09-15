import { useRef, useState } from "react";

export default function PriceMenu({
  priceMin, 
  priceMax, 
  changeMaxPrice, 
  changeMinPrice,
  show,
} : {
  priceMin: number, 
  priceMax: number, 
  changeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  changeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
  show : boolean,
}) {

  const [hide, setHide] = useState(true);

  return (
    <div onAnimationEnd={() => setHide(!hide)} className={`${(hide && !show) && 'hidden'} ${show ? 'animate-fadeInMenu' : 'animate-fadeOutMenu'} border border-slate-400 p-4 absolute top-8 -left-1 right-auto z-10 bg-white rounded-2xl flex sm:flex-row gap-3 flex-col items-center fill-mode-forwards`}>
      <div className="flex items-center">
        <div className="mr-1 text-slate-600">
          $
        </div>
        <input value={!priceMin ? '' : priceMin} onChange={changeMinPrice} placeholder="From" className="border border-slate-500 p-1 pl-3 rounded-full w-20" />
      </div>
      <div className="flex items-center">
        <div className="mr-1 text-slate-600">
          $
        </div>
        <input value={priceMax === Infinity ? '' : priceMax} onChange={changeMaxPrice} placeholder="To" className="border border-slate-500 p-1 pl-3 rounded-full w-20" />
      </div>
    </div>
  )
}
export default function AvailabilityMenu( {inStockChecked, checkInStock} : {inStockChecked: boolean, checkInStock: () => void} ) {
  return (
    <div className="border border-slate-400 absolute top-8 left-[4.4rem] z-10 bg-white rounded-2xl py-2 px-4 animate-fadeInMenu">
      <input type="checkbox" checked={inStockChecked} onClick={checkInStock} className="inline-block"/>
      <div className="inline-block ml-4 text-slate-600">
        In Stock
      </div>
    </div>
  )
}
export default function AvailabilityMenu({
  inStockChecked, 
  checkInStock, 
  show,
  animateReady
} : {
    inStockChecked: boolean, 
    checkInStock: () => void, 
    show: boolean,
    animateReady: boolean, 
  }) {
  return (
    <div className={`${!animateReady && 'hidden'} ${show ? 'animate-fadeInMenu' : 'animate-fadeOutMenu'} border border-slate-400 absolute top-8 -left-1 z-10 bg-white rounded-2xl py-2 px-4 flex fill-mode-forwards`}>
      <input type="checkbox" checked={inStockChecked} onChange={checkInStock} className="inline-block"/>
      <div className="inline-block ml-4 text-slate-600 whitespace-nowrap">
        In Stock
      </div>
    </div>
  )
}
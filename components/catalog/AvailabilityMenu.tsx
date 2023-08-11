export default function AvailabilityMenu( {inStockChecked, checkInStock} : {inStockChecked: boolean, checkInStock: () => void} ) {
  return (
    <div className="border border-black absolute top-5 left-24 z-10 bg-white">
      <input type="checkbox" checked={inStockChecked} onClick={checkInStock}/>
      <div>
        In Stock
      </div>
    </div>
  )
}
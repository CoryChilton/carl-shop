export default function QuantitySelect({onIncrease, onDecrease, quantity}) {
  return (
    <div className="flex w-28 h-12 justify-between items-center border border-gray-200 rounded-sm mb-4">
      <div className="h-full border-r border-gray-200 rounded-r-sm">
        <QuantityButton onClick={onDecrease} disabled={quantity <= 1}>-</QuantityButton>
      </div>
      <div className="h-full w-full flex items-center justify-center shadow-inner">
        <h1 className="">{quantity}</h1>
      </div>
      <div className="h-full border-l border-gray-200 rounded-l-sm">
        <QuantityButton onClick={onIncrease} disabled={quantity <= 0}>+</QuantityButton>
      </div>
    </div>
  )
}

function QuantityButton({onClick, children, disabled}){
  return (
    <button onClick={onClick} disabled={disabled} className="bg-gray-100 w-8 flex-none h-full hover:bg-gray-300 ease-in duration-150 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400">
      {children}
    </button>
  )
}
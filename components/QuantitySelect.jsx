export default function QuantitySelect({onIncrease, onDecrease, quantity}) {
  return (
    <>
      <button onClick={onDecrease}>-</button>
      <h1>{quantity}</h1>
      <button onClick={onIncrease}>+</button>
    </>
  )
}
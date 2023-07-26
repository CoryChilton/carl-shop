import SizeSelect from './SizeSelect'
import QuantitySelect from './QuantitySelect'

export default function ItemInfoAndOptions({item}) {

  return (
    <>
      <h1>{item.name}</h1>
      <h2>{item.description}</h2>
      <SizeSelect />
      <h3>Price: ${item.price}.00</h3>
      <QuantitySelect />
      <h3>Total: item.price * quantity</h3>
      <button className="block">Add to Cart</button>
      <button className="block">Buy Now</button>
    </>
  )
}
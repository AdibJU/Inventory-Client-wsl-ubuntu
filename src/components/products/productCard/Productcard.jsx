import './Productcard.css'

export  function Productcard({product,addtoCart}) {
  const handleAddcart = () => addtoCart(product);
  return (
    <div className="product-card">
        <h1>{product.name}</h1>
        <p>{`TK ${product.price}`}</p>
        <p>{`Quantity: ${product.quantity}`}</p>
        <button onClick={handleAddcart} className='product-cart-btn'>Add to Cart</button>
    </div>
  )
}

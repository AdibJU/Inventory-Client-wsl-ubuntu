import "./Productcard.css";

export function Productcard({ product, isAddedToCart, addtoCart, removeFromCart }) {
  const handleAddcart = () => addtoCart(product);
  const handleRemoveCart = () => removeFromCart(product.id);
  return (
    <div className="product-card">
      <h1>{product.name}</h1>
      <p>{`TK ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>
      <button onClick={handleAddcart} className="product-cart-btn">
        Add to Cart
      </button>
      {isAddedToCart && (
        <button className="product-cart-btn danger" onClick={handleRemoveCart}>
          Remove from Cart
        </button>
      )}
    </div>
  );
}

import { useState } from "react";
import { Productcard } from "./productCard/Productcard";
import "./Products.css";
export const Products = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: "1",
      name: "computer",
      price: 50000,
      quantity: 20,
    },
    {
      id: "2",
      name: "keyboard",
      price: 20000,
      quantity: 10,
    },
  ];
  const cartItems = cart.length;

  const productAlreadyAdded = (productid) => {
    return cart.some((product) => product.id === productid); // ei product var er id r sathe uporer id
  };
  const addProductTocart = (product) => {
    if (productAlreadyAdded(product.id)) {
      alert("Already Added!!!");
      return;
    }
    setCart([...cart, product]);
  };
  const removeProductFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== productId)) // ei cart item er id r sathe 
  };
  return (
    <div className="Products">
      <div>
        <h3>{`in cart : ${cartItems}`}</h3>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div>
            <Productcard
              key={product.id}
              product={product}
              addtoCart={addProductTocart}
              isAddedToCart={productAlreadyAdded(product.id)}
              removeFromCart={removeProductFromCart} //duita function er (var) name vinno kaj same thats why productID = product.id
            />
          </div>
        ))}
      </div>
    </div>
  );
};

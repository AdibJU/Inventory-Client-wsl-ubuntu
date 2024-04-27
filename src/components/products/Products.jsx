
import { Productcard } from "./productCard/Productcard";

import "./Products.css";
import { useProducts } from "./hooks/useProducts";
export const Products = () => {
  const { cart, cartItems, products, addProductTocart, removeProductFromCart, productAlreadyAdded } = useProducts();
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

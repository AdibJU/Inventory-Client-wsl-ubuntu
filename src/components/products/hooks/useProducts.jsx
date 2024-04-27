import { useState } from 'react';

import { productServices } from '../../../services';

export function useProducts() {
  const [cart, setCart] = useState([]);

  const products = productServices.getProducts();

  const productAlreadyAdded = (productId) =>
    cart.some((product) => product.id === productId);

  const addProductToCart = (product) => {
    if (productAlreadyAdded(product.id)) {
      alert('Already added!!!');
      return;
    }
    setCart([...cart, product]);
  };

  const removeProductFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== productId));
  };

  return {
    cart,
    products,
    productAlreadyAdded,
    addProductToCart,
    removeProductFromCart,
  };
}

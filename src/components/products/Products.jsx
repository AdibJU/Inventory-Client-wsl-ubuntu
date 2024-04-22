import { useState } from "react"
import { Productcard } from "./productCard/Productcard"
import './Products.css'
 export const Products = () => {

    const [cart,setCart] = useState([]);

    const products = [{
        id : '1',
        name : 'computer',
        price : 50000,
        quantity : 20,
    },
    {
        id : '2',
        name : 'keyboard',
        price : 20000,
        quantity : 10,
    },
]
const cartItems = cart.length;

const productAlreadyAdded =(productid) => {
    return cart.some((product) => product.id === productid)
}
const addProductTocart = (product) => {
    if(productAlreadyAdded(product.id)) {
        alert("Already Added!!!");
        return;
    }
    setCart([...cart,product])
}

    return(
        <div className ="Products">
            <div>
                <h3>{`in cart : ${cartItems}`}</h3>
            </div>
            <div className="products-grid">
            {products.map((product) => (
                <div><Productcard key ={product.id} product ={product} addtoCart = {addProductTocart} /></div>
            ))}
            </div>
        </div>
    )
}
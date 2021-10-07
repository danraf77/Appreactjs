import React from "react";
import { useContext } from "react"
import { ItemContext } from "../context/ItemContext"

const Cart = () => {
    const {carrito} = useContext(ItemContext);
    console.log(carrito);
    

    return (
        <>
              
              <div className="container">
                <div className="d-flex align-items-center mt-5 mb-5">
                
                <ul>
                {
                    carrito.map(productos => <li>{productos.cantidad} - {productos.title} - US$ {productos.price}</li>)
                }
                </ul>
                </div>  
                </div>
              
       
              
        </>
       
    )
}
export default Cart
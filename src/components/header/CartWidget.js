import { Cart2 } from 'react-bootstrap-icons';
import { useState } from 'react';
const CartWidget = () => {

    const [cart, setCart] = useState(0)
    const onAdd = () => {
    setCart(cart+1);
      }

    return (
        <>
              
              
              <span className="ms-5 pb-2"><Cart2 color="royalblue" size={20}/></span><span className="badge rounded-pill bg-primary">{cart}</span>
              <button type="button" onClick={onAdd} className="btn btn-primary btn-sm">Agregar producto</button>
        </>
       
    )
}
export default CartWidget
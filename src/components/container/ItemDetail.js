import './ItemCount.css';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';



const ItemDetail = ({productos}) => {

    console.log(productos)
    const {setCarrito} = useContext(ItemContext);
    const addItem = (cantidad) => {
        const itemConCantidad = {...productos, cantidad};
        setCarrito(prev => {
            return [...prev, itemConCantidad];
        })

    }


    return (
        <>
              
              
              
            <div class="card">
                <img src={productos.image} class="card-img-top p-3" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{productos.title}</h5>
                    <p class="card-text">{productos.description}</p>
                    <p class="card-text">{productos.category}</p>
                    <p>US$ {productos.price}</p>
                    <ItemCount onAdd={addItem}/>
                    
                    
                </div>
            </div>
              
        </>
       
    )
}
export default ItemDetail
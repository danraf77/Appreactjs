import {Link} from "react-router-dom"
import './ItemCount.css';
const Item = ({producto}) => {
    return (
        <>
              
              
              
            <div class="card">
                <img src={producto.image} class="card-img-top p-3" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{producto.title}</h5>
                    <p>US$ {producto.price}</p>
                    <p>Categoria: {producto.category}</p>
                    
                    <Link class="btn btn-outline-secondary" to={`productos/${producto.id}`} role="button">ver detalle</Link>
                    
                </div>
            </div>
              
        </>
       
    )
}
export default Item
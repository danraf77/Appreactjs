import {useState} from "react"
import './ItemCount.css';
import {Link} from "react-router-dom"



const ItemCount = ({onAdd}) => {
    const [contador, setContador] = useState(1)

    const sumar = () => {
      if (contador >= 5){
        return;
    }
        setContador(contador+1);
    }
    const restar = () => {
        if (contador === 0){
            return;
        }
        setContador(contador-1);
    }

    
    return (
      
      <>  

            <div className="btn-wrapper mt-3 text-center">
                <button type="button" onClick={sumar} className="btn btn-outline-primary btn-sm">+</button>
                <span className="me-2 ms-2">{contador}</span>
                <button type="button" onClick={restar} className="btn btn-outline-primary btn-sm">-</button>
             </div>
             <div className="text-center mt-2">
             <button type="button" onClick={() => onAdd(contador)} className="btn btn-primary btn-sm">Agregar producto</button>
             
             <Link class="btn btn-outline-secondary" to="/cart" role="button">terminar mi compra </Link>
             </div>


      </>  
       
    )
}
export default ItemCount

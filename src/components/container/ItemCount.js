import {useState} from "react"
import './ItemCount.css';
import ItemCountlogo from './ItemCount.png';



const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial)

    const sumar = () => {
      if (contador >= stock){
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
        <div className="card" >
        <img src={ItemCountlogo} className="card-img-top" alt="..."></img>
       
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="btn-wrapper mt-3 text-center">
                <button type="button" onClick={sumar} className="btn btn-outline-primary btn-sm">+</button>
                <span className="me-2 ms-2">{contador}</span>
                <button type="button" onClick={restar} className="btn btn-outline-primary btn-sm">-</button>
             </div>
             <div className="text-center mt-2">
             <button type="button" onClick={onAdd} className="btn btn-primary btn-sm">Agregar producto</button>
             </div>
          </div>
        </div>

      </>  
       
    )
}
export default ItemCount

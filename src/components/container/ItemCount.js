import {useState} from "react"
import './ItemCount.css';
import ItemCountlogo from './ItemCount.png';

const ItemCount = ({ stock, initial,  onAdd }) => {
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
        <div class="card" >
        <img src={ItemCountlogo} class="card-img-top" alt="..."></img>
       
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="btn-wrapper mt-3 text-center">
                <button type="button" onClick={sumar} class="btn btn-outline-primary btn-sm">+</button>
                <span class="me-2 ms-2">{contador}</span>
                <button type="button" onClick={restar} class="btn btn-outline-primary btn-sm">-</button>
             </div>
             <div className="text-center mt-2">
             <button type="button" class="btn btn-primary btn-sm">Agregar producto</button>
             </div>
          </div>
        </div>

      </>  
       
    )
}
export default ItemCount
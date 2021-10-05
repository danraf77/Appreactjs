import './ItemCount.css';
import ItemCount from './ItemCount';
const ItemDetail = ({title, image, price, description, category}) => {
    return (
        <>
              
              
              
            <div class="card">
                <img src={image} class="card-img-top p-3" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text">{category}</p>
                    <p>US$ {price}</p>
                    <ItemCount />
                    
                    
                </div>
            </div>
              
        </>
       
    )
}
export default ItemDetail
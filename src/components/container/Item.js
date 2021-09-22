import './ItemCount.css';
const Item = ({producto}) => {
    return (
        <>
              
              
              
            <div class="card">
                <img src={producto.image} class="card-img-top p-3" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{producto.title}</h5>
                    <p>US$ {producto.price}</p>
                    <button type="button" class="btn btn-outline-secondary">Ver detalle</button>
                    
                </div>
            </div>
              
        </>
       
    )
}
export default Item
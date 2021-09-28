import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

let greeting="Compras mas por menos"     

const ItemDetailContainer = () => {
 
    const [productos,setProductos] = useState ([])
   
     useEffect(()=>{
             setTimeout(()=>{
                 fetch('https://fakestoreapi.com/products/')
     .then(res => res.json())
     .then((data) => {
        
        const getItem = {
            id: data[0].id,
            title: data[0].title,
            price: data[0].price,
            description: data[0].description,
            category: data[0].category,
            image: data[0].image


        }
        
        setProductos(getItem)
    
    
    
    
    })
             },2000)
     },[])
  


    return (
        <>
        <div className="container">
        <p className="mt-3 mb-3"><h5> {greeting} </h5></p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <div className="col">
                    <ItemDetail 
                    id = {productos.id} 
                    title = {productos.title} 
                    price = {productos.price} 
                    description = {productos.description} 
                    category = {productos.category}
                    image ={productos.image} 
                    /> 
                    </div>

              
              </div>       
        </div>
        </>   
    );

}
export default ItemDetailContainer
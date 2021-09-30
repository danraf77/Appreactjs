import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

let greeting="Compras mas por menos"     

const ItemDetailContainer = () => {

    const {id} = useParams()
 
    const [productos,setProductos] = useState ([])
   
     useEffect(()=>{
             setTimeout(()=>{
                 fetch(`https://fakestoreapi.com/products/${id}`)
     .then(res => res.json())
     .then((data) => {
        
        const getItem = {
            id: data.id,
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            image: data.image


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
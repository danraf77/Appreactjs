import Item from "./Item"
const ItemList = ({productos}) => {

    return (
        <>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {productos.map((producto)=>{
                      return (
                    <>
                    <div className="col">
                      <Item producto={producto}/>
                    </div>
                    </>
                      )

                  })}
              
              </div>
             
              
              
        </>
       
    )
}
export default ItemList
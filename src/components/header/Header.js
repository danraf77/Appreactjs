import Nav from "./Nav"
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"


const Header = ({titulo, subtitulo, edad, id}) => {

   

    return (
        
        <>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">{titulo}</a><span class="navbar-text"><ItemListContainer greeting="Compras mas por menos"/></span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <Nav />
  

     <span class="ms-5 pb-2"><CartWidget /></span><span class="badge rounded-pill bg-primary">4</span>



  
    

    </div>
  </div>
</nav>




        </>
       
    )
}
export default Header
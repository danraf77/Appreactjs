import Nav from "./Nav"
import ItemListContainer from "./ItemListContainer"

const Header = ({titulo, subtitulo, edad, id}) => {

    /*console.log(parametro.titulo)*/

    return (
        
        <>        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">{titulo}</a>
            <ItemListContainer greeting="Compras mas por menos"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        <Nav />
        </div>
        </nav>
        </>
       
    )
}
export default Header
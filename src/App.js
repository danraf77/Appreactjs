import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ItemCount from "./components/container/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {


    let titulo = "TEKKY"
    return (
        <>

        <Header titulo={titulo}/>
        <div className="container">
        <ItemCount stock="5" initial="1" /> 
        </div>
        <Footer />


        </>
    )
}
export default App
import {useState} from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ItemCount from "./components/container/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
    const [cart, setCart] = useState(0)
    const onAdd = () => {
    setCart(cart+1);
      }

    let titulo = "TEKKY"
    return (
        <>

        <Header titulo={titulo} cart={cart} />
        <div className="container">
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
        </div>
        <Footer />


        </>
    )
}
export default App
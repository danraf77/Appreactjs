import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Cart from "./components/container/Cart"
import ItemListContainer from "./components/container/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
    return (
        <BrowserRouter>

        <Header />
        <Switch>
        <Route path="/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id" component={ItemListContainer}/>
        <Route path="/productos/:id" component={ItemDetailContainer}/>
        <Route path="/cart" component={Cart}/>
        </Switch>
        <Footer />


        </BrowserRouter>
    )
}
export default App
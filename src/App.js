import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import CartWidget from "./components/header/CartWidget"
import ItemListContainer from "./components/container/ItemListContainer"
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
        <Route path="/cart" component={CartWidget}/>
        </Switch>
        <Footer />


        </BrowserRouter>
    )
}
export default App
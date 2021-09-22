import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ItemListContainer from "./components/container/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
    return (
        <>

        <Header />
        <ItemListContainer/>
        <Footer />


        </>
    )
}
export default App
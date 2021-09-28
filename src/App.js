import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ItemDetailContainer from "./components/container/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
    return (
        <>

        <Header />
        <ItemDetailContainer/>
        <Footer />


        </>
    )
}
export default App
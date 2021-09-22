import { Cart2 } from 'react-bootstrap-icons';
const CartWidget = ({cart}) => {

    return (
        <>
              
              
              <span className="ms-5 pb-2"><Cart2 color="royalblue" size={20}/></span><span className="badge rounded-pill bg-primary">4</span>
              
        </>
       
    )
}
export default CartWidget
import { Cart2 } from 'react-bootstrap-icons';
const CartWidget = ({cart}) => {

    return (
        <>
              
              
              <span class="ms-5 pb-2"><Cart2 color="royalblue" size={20}/></span><span class="badge rounded-pill bg-primary">{cart}</span>
              
        </>
       
    )
}
export default CartWidget
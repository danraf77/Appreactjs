import Nav from "./Nav"
import CartWidget from "./CartWidget"


const Header = () => {
  let titulo = "TEKKY"
    return (
        
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#headers">{titulo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Nav />
    <CartWidget/> 
    </div>
  </div>
</nav>
        </>
       
    )
}
export default Header
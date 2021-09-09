import CartWidget from "./CartWidget"
const Nav = () => {
    return (
        <>
            <ul class="nav navbar-nav mb-2 mb-lg-0 mb-2 mb-lg-0 justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Laptops</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Computo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Accesorios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Tablets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Relojes</a>
                    </li>
                <CartWidget />
            </ul>
        </>
    )
}
export default Nav
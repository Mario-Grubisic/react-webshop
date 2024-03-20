import { Outlet, Link } from "react-router-dom"

function Product() {
    return(
        <div className="product-wrapper">
            <h2>Article comes below this point</h2>
            <Link to="/product/2">Go to product with id: 2</Link>
            <Outlet />
        </div>
    )
}

export {Product}
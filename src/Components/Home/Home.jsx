import { useEffect, useState } from "react"
import { ProductList } from "../Product/ProductList"
import { Product } from "../Product/Product";

function Home() {

    const [productList, setProductList] = useState([]);
    useEffect(() => {
        //make a request towards webshop API
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {
            console.log("Our data from remote API", json.products)
            setProductList(json.products);
        })
    }, []);

    return(
        <div className="home">
            <div className="sidebar">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
            </div>
            <div className="right">
                <h2>Amazing webshop</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eligendi ut vel minima quo eius fugit. Aut fugit sunt ratione?</p>
                <ProductList products={productList} />
            </div>
        </div>
    )
}

export {Home}
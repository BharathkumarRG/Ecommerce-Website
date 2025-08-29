import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products')
        .then(res=> res.json())
        .then
    },[])

    return (
        <Fragment>
           

            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    <ProductCard />
                </div>
            </section>

            
        </Fragment>
    )
};

export default Home;
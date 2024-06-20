import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
const AllProducts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://bangla-bazar-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="max-w-7xl mx-auto mt-8">
            <h1 className="text-2xl font-bold text-center my-8 bg-red-100 p-2">Regular Products</h1>
            <div className="grid  md:grid-cols-5 gap-3 justify-items-center">
                {
                    products.slice(0, 10)?.map(product => (
                        <Product key={product?._id} product={product} />
                    ))
                }
            </div>
            <div className=" w-11/12 mx-auto">
                <Link to={"/regular-products"}>
                    <button className="btn w-full btn-sm btn-error mt-6">See More Products</button>
                </Link>
            </div>
        </div>
    );
};

export default AllProducts;
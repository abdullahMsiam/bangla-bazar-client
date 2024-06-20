import { useEffect } from "react";
import DashProduct from "../../components/Dashboard/DashProduct";
import { useState } from "react";

const DashProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleDelete = (id) => {
        const proceed = confirm('Are you sure to delete');

        if (proceed) {
            fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingProducts = products.filter(p => p._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    }


    return (
        <div className="container mx-auto mt-6">
            <h1 className="text-center text-2xl font-bold">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-6 justify-items-center gap-4 ">
                {
                    products.map((product) => (
                        <DashProduct key={product._id} product={product} handleDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    );
};

export default DashProducts;
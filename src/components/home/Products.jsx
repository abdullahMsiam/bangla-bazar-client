import FeaturesProduct from "../FeaturesProduct";
import SingleProduct from "./SingleProduct";

const Products = () => {
    return (
        <div className="w-11/12 mx-auto mt-8">
            <div className="md:grid grid-cols-6 gap-4 border border-green-600 p-6 rounded-lg">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>

            <div>
                <h1 className="text-3xl font-bold underline text-red-600 mt-6">Up coming deals...</h1>
                <div className=" md:grid grid-cols-2 gap-4">
                    <FeaturesProduct />
                    <FeaturesProduct />
                </div>
            </div>

        </div>
    );
};

export default Products;
import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData();
    const { _id, discount, image_url, name, price, rating, stock } = data;

    const handleClick = () => {
        alert(`its coming soon for ${_id}`)
    }
    return (
        <div className="container mx-auto mt-16">
            <div className="grid md:grid-cols-2 justify-items-center justify-between p-2 h-[600px]">
                <div>
                    <img className="w-1/2 mx-auto" src={image_url} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-semibold">{name}</h1>
                    <h1 className="text-2xl font-semibold mt-3">Price- ${price} | discount- {discount}%</h1>
                    <h1 className="text-lg ">Discover our versatile product: reliable, designed for everyday use. Enhance your experience with its effortless performance and sleek design. Perfect for any home or professional setting.</h1>
                    <h1 className="flex items-center text-lg font-semibold">Rating: {rating} <FaStar /> </h1>
                    <h1 className="text-green-600 text-lg font-semibold">Available Product: {stock} </h1>
                    <button onClick={handleClick} className="w-full btn btn-square btn-outline btn-md text-xl mt-6">Add to Cart</button>
                    <button onClick={handleClick} className="w-full btn-error btn btn-square btn-outline btn-md text-xl mt-6">Save to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
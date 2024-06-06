
import proImg from "../../assets/product.jpg";

const SingleProduct = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center border border-red-600 rounded-md w-48 h-72 hover:scale-105 duration-150">
                <p className="bg-red-600 w-1/5 -ms-28 m-2 rounded-md text-white font-semibold">15%</p>
                <img className="w-24" src={proImg} alt="" />
                <h2 className="font-semibold text-red-600">$500</h2>
                <p>Special family package</p>
                <p className="text-green-600 font-semibold">IN STOCK</p>
                <p>Rating</p>
                <button className=" mt-2 w-11/12 btn btn-sm btn-success">Details</button>
            </div>
        </div>
    );
};

export default SingleProduct;
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DashProduct = ({ product, handleDelete }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, discount, image_url, name, price, rating, stock } = product;


    return (
        <div>
            <div className="flex flex-col justify-center items-center text-center border border-red-600 rounded-md w-48 h-72 hover:scale-105 duration-150">
                <p className="bg-red-600 w-1/5 -ms-28 m-2 rounded-md text-white font-semibold">{discount}%</p>
                <img className="w-24" src={image_url} alt="" />
                <h2 className="font-semibold text-red-600">${price}</h2>
                <p>{name}</p>
                <p className="text-green-600 font-semibold">Stock available {stock}</p>
                <p>Rating- {rating} </p>
                <div className='flex gap-2'>
                    <button className=" mt-2 w-1/2 btn btn-sm btn-warning"> <Link to={`update/${_id}`}>Update</Link>     </button>
                    <button onClick={() => handleDelete(_id)} className=" mt-2 w-1/2 btn btn-sm btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DashProduct;
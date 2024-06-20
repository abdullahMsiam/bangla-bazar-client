import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

const BanglaBazar = () => {
    return (
        <div>

            <Link to={"/"}>
                <h1 className="font-mono ms-2 btn btn-outline w-full bg-red-500 text-white py-2 shadow-black shadow-lg rounded-lg flex h-10 "> BanglaBZ <FcApproval /> </h1></Link>

        </div>
    );
};

export default BanglaBazar;
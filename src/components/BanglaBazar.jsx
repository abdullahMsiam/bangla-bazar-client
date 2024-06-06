import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";

const BanglaBazar = () => {
    return (
        <div>
            <h1 className="font-mono ms-2 btn btn-outline font-bold bg-red-500 text-white py-4 shadow-black shadow-lg px-2 rounded-xl flex "> <Link to={"/"}>BanglaBZ</Link> <FcApproval /> </h1>
        </div>
    );
};

export default BanglaBazar;
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();


    const handleGoogleLogin = () => {
        googleLogin();
    }
    return (
        <div className="w-9/12 md:w-10/12 mb-8" onClick={() => handleGoogleLogin()}>
            <button className="btn border border-black bg-white text-red-600 w-full font-bold"> Google <FcGoogle /> </button>

        </div>
    );
};

export default GoogleLogin;
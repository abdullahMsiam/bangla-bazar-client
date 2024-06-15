import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();


    const handleGoogleLogin = () => {
        googleLogin().then((data) => {
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: data?.user?.displayName
                };
                fetch('http://localhost:3000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            }
        });
    }
    return (
        <div className="w-9/12 md:w-10/12 mb-8" onClick={() => handleGoogleLogin()}>
            <button className="btn border border-black bg-white text-red-600 w-full font-bold"> Google <FcGoogle /> </button>

        </div>
    );
};

export default GoogleLogin;
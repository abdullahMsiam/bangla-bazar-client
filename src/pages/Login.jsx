import useAuth from "../hooks/useAuth";

const Login = () => {

    const { googleLogin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }
    const handleGoogleLogin = () => {
        googleLogin();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-red-300 bg-opacity-50">
                <div className=" flex-col py-6 ">
                    <div>
                        <h1 className="text-4xl text-center font-bold pb-8">Login</h1>
                    </div>
                    <div className="card shrink-0 w-full md:w-[700px] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>

                            <div className="flex justify-center">
                                <input type="submit" className="btn bg-red-600 text-white w-11/12 mt-4" value="Register" />
                            </div>
                        </form>
                        <div onClick={handleGoogleLogin} className="card-body flex justify-center items-center -mt-8">
                            <input type="submit" className="btn bg-red-600 text-white w-11/12" value="Google" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
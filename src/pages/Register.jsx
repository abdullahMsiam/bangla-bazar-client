import GoogleLogin from "../components/login-register/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Register = () => {

    const { createUser } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;



        if (password === confirmPassword) {
            createUser(email, password).then((data) => {
                if (data?.user?.email) {
                    const userInfo = {
                        email: data?.user?.email,
                        name: name
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
        else {
            alert("Your password don't match!!")
        }


    }
    return (
        <div>
            <div className="hero min-h-screen bg-red-300 bg-opacity-50">
                <div className=" flex-col py-6 ">
                    <div>
                        <h1 className="text-4xl text-center font-bold pb-8">Sign Up</h1>
                    </div>
                    <div className="card shrink-0 w-full md:w-[700px] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="full name" name="name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" name="confirmPassword" className="input input-bordered" required />
                            </div>

                            <div className="flex justify-center">
                                <input type="submit" className="btn bg-red-600 text-white w-11/12 mt-4" value="Register" />
                            </div>
                        </form>
                        <div className="flex justify-center items-center -mt-4">
                            <GoogleLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
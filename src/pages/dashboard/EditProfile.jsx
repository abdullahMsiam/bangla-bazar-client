import { useLoaderData } from "react-router-dom";

const EditProfile = () => {

    const data = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const mobile = form.mobile.value;

        const userData = { name, email: data?.email, age, mobile };

        fetch(`https://bangla-bazar-server.onrender.com/user/${data?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    alert('Your data will be updated!')
                }
            })

    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">Edit Your Profile</h1>
            <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Full Name</span></label>
                        <input name="name" type="text" defaultValue={data?.name} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input name="email" defaultValue={data?.email} disabled type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Age</span></label>
                        <input name="age" type="number" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Mobile Number</span></label>
                        <input name="mobile" type="number" placeholder="mobile number" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-success bg-opacity-90" type="submit" value="Save Your Profile" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {

    const { user } = useAuth();
    console.log(user.email);

    const data = useLoaderData();
    console.log(data.email)

    // const url = `http://localhost:3000/user/${user?.email}`;

    // useEffect(() => {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => setUserInfo(data))

    // }, [])

    return (
        <div>
            <div>
                <img className="w-full mx-auto h-[400px]" src="https://img.freepik.com/free-vector/green-gradient-design_1308-3825.jpg?t=st=1718527675~exp=1718531275~hmac=8b24a82d96e736d15ccebaa8ec30142ff4ea3c35c4c4fcb856619dfe0abd5aad&w=900" alt="" />
            </div>
            <div className="-mt-64 mx-auto flex flex-col justify-center items-center">
                <div className="card w-11/12 md:w-1/2 h-[400px] bg-base-100 bg-opacity-90 shadow-xl">
                    <figure className="px-10 -mt-8 flex flex-col">
                        {
                            user?.photoURL ? <img className="rounded-full bg-white p-2" src={user?.photoURL} alt="" /> :
                                <div className="text-8xl rounded-full bg-white p-2"> <FaUserCircle /> </div>}
                        <a href={`edit/${data?._id}`} className="text-3xl -me-[700px] -mt-14"> <FaEdit /> </a>
                    </figure>
                    <div className="card-body justify-center items-center text-center">
                        <h2 className="card-title">{data.name}</h2>
                        <p>Mail: {data.email}</p>

                        <div className="flex gap-6 justify-center items-center">
                            <div className=" h-20 border border-red-500 p-2 rounded-md hover:bg-red-200 hover:scale-95 duration-75">
                                <h1 className="text-xl font-semibold">12</h1>
                                <p> Favorite </p>
                            </div>
                            <div className=" h-20 border border-red-500 p-2 rounded-md hover:bg-red-200 hover:scale-95 duration-75">
                                <h1 className="text-xl font-semibold">06</h1>
                                <p> Received </p>
                            </div>
                            <div className=" h-20 border border-red-500 p-2 rounded-md hover:bg-red-200 hover:scale-95 duration-75">
                                <h1 className="text-xl font-semibold">00</h1>
                                <p> Cart Product </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
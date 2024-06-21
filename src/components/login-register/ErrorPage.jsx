import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className="container flex flex-col justify-center items-center min-h-screen text-center py-32">
            <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
            <p className="lg:text-3xl text-red-500">{error?.message}</p>
            <p>Try to login again!</p>
            <Link to={'/'}>
                <button className="btn btn-md bg-red-500 text-white mt-8">
                    Home
                </button>
            </Link>

        </div>
    );
};

export default ErrorPage;
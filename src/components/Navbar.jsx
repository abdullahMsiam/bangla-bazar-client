import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Tooltip from "./Tooltip";
import BanglaBazar from "./BanglaBazar";
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {

    const { user, logout, } = useAuth();

    const navMenu = (
        <>
            <li className="font-bold"> <Link to={"/about-us"}>About</Link> </li>
            <li className="font-bold"> <Link to={"/about"}>Contact Us</Link> </li>
            <li className="font-bold"> <Link to={"/regular-products"}>Shopping</Link> </li>
            {user ?
                <li className="font-bold"> <Link to={`dashboard`}>Dashboard</Link> </li> : <></>
            }

        </>
    );

    const handleLogout = () => {
        logout().then(() => {
            localStorage.removeItem('bangla-bazar-token');
        });
    }
    return (
        <div>
            <div className="navbar bg-green-200 bg-opacity-80 fixed top-0 z-20 h-12 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <BanglaBazar />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ?
                                <ul className="menu menu-horizontal justify-center items-center ">
                                    <li className="hidden md:block">
                                        <Tooltip text={user.displayName}>
                                            {user?.photoURL ? <img className="rounded-full w-10 border border-green-700 tooltip" src={user?.photoURL} alt="" /> :
                                                <FaCircleUser className="text-2xl" />}
                                        </Tooltip>

                                    </li>
                                    <li>
                                        <details>
                                            <summary>
                                                My Account
                                            </summary>
                                            <ul className="w-32 text-center h-[150px] flex flex-col  items-center bg-opacity-70">
                                                <li className="text-xl">
                                                    Hi
                                                </li>
                                                <li>
                                                    <button className=" mt-4 btn btn-success btn-sm">
                                                        <Link to={`dashboard/profile`}> View Profile</Link>
                                                    </button>
                                                </li>

                                                <li>
                                                    <button onClick={() => handleLogout()} className=" w-full mt-4 btn btn-error btn-sm bg-red-600  font-bold">Logout <FaSignOutAlt /> </button>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>

                                </ul> : <div className="flex">
                                    <Link to={"/login"}>
                                        <button className="btn btn-outline btn-sm bg-green-500 rounded-badge font-bold">Login </button>
                                    </Link>
                                    <Link to={"/register"}>
                                        <button className="ms-1 btn btn-outline btn-sm bg-yellow-500 rounded-badge font-bold">Sign Up</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
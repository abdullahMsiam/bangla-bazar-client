import { FaUserCircle } from 'react-icons/fa';
import { FcHome, FcRules, FcTodoList } from 'react-icons/fc';
import { Link, Outlet } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
    // const { user } = useAuth();

    const navmenu = (
        <>
            <li className='btn btn-xs btn-outline btn-success mt-2 ms-2'> <Link to={"/"}><FcHome />Home Page  </Link> </li>
            <li className='btn btn-xs btn-outline btn-success mt-2 ms-2'> <Link to={"profile"}> <FaUserCircle />Profile </Link> </li>
            <li className='btn btn-xs btn-outline btn-success mt-2 ms-2'> <Link to={"all-products"}><FcRules />All products  </Link> </li>
            <li className='btn btn-xs btn-outline btn-success mt-2 ms-2'> <Link to={"all-products/add-product"}><FcTodoList />Add product  </Link> </li>
        </>
    )
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-green-200 bg-opacity-55 ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="btn btn-sm btn-outline btn-error flex px-2 mx-2 font-bold"> <Link to={``}>Dashboard</Link> </div>
                        <div className="flex-none hidden lg:block mx-auto">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navmenu}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-44 min-h-full bg-green-50">
                        {/* Sidebar content here */}
                        {navmenu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
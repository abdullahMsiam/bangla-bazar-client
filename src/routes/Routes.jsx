import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/client-pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import DashProducts from "../pages/dashboard/DashProducts";
import PrivateRoute from "./private/PrivateRoute";
import EditProfile from "../pages/dashboard/EditProfile";
import Profile from "../pages/dashboard/Profile";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import AddProduct from "../pages/dashboard/AddProduct";
import RegularProducts from "../pages/client-pages/RegularProducts";
import ProductDetails from "../pages/client-pages/ProductDetails";
import AboutUs from "../pages/client-pages/AboutUs";
import ErrorPage from "../components/login-register/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/regular-products",
                element: <PrivateRoute> <RegularProducts /> </PrivateRoute>,
            },
            {
                path: "/regular-products/:id",
                element: <PrivateRoute> <ProductDetails /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://bangla-bazar-server.onrender.com/products/${params.id}`)
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
            },
            {
                path: "profile",
                element: <PrivateRoute> <Profile /> </PrivateRoute>,
            },
            {
                path: "all-products",
                element: <PrivateRoute> <DashProducts /> </PrivateRoute>
            },
            {
                path: "all-products/update/:id",
                element: <PrivateRoute> <UpdateProduct /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://bangla-bazar-server.onrender.com/products/${params.id}`)

            },
            {
                path: "all-products/add-product",
                element: <PrivateRoute> <AddProduct /> </PrivateRoute>,

            },
            {
                path: "edit/:id",
                element: <PrivateRoute> <EditProfile /> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://bangla-bazar-server.onrender.com/user/get/${params.id}`)

            },
        ]
    }
]);

export default router; 
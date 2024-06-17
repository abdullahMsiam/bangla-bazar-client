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


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "profile/:email",
                element: <PrivateRoute> <Dashboard /> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/user/${params.email}`)
            },
            {
                path: "all-products",
                element: <PrivateRoute> <DashProducts /> </PrivateRoute>
            },
            {
                path: "profile/edit/:id",
                element: <PrivateRoute> <EditProfile /> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/user/get/${params.id}`)

            },
        ]
    }
]);

export default router; 
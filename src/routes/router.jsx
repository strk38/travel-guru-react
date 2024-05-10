import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import Home from "../Components/Pages/Home";
import Root from "./Root.jsx";
import Login from "../Components/Pages/login.jsx";
import Register from "../Components/Pages/Register.jsx";
import Destination from "../Components/Pages/Destination.jsx";
import Booking from "../Components/Pages/Booking.jsx";
import PrivateRoute from "./PrivateRoute.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('/info.json'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/destination/:id",
                element: <Destination></Destination>,
                loader: () => fetch('/info.json'),
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/booking",
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
            },
        ],
    },
]);

export default router;
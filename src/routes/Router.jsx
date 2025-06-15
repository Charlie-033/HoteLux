import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/NotFound/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "../context/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'rooms',
                element: <Rooms/>
            },
            {
                path: 'rooms/:id',
                element: <RoomDetails/>
            },
            {
                path: 'my-bookings/:email',
                element: <PrivateRoute>
                    <MyBookings/>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])
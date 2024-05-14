import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Rooms from "../Rooms/Rooms";
import RoomDetails from "../RoomDetails/RoomDetails";
import MyBookings from "../MyBookings/MyBookings";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import UpdateBooking from "../UpdateBooking/UpdateBooking";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>,
          // loader: () => fetch('https://hotel-hive-server-ten.vercel.app/bookings') 
        },
        {
          path: '/roomDetails/:id',
          element: <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <UpdateBooking></UpdateBooking>,
          loader : ({params}) => fetch(`https://hotel-hive-server-ten.vercel.app/addings/${params.id}`)
        },
        {
          path : '/myBookings',
          element : <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;
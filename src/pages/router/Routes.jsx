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
          loader: () => fetch('http://localhost:5000/bookings') 
        },
        {
          path: '/roomDetails/:id',
          element: <RoomDetails></RoomDetails>
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
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
        }
      ]
    },
  ]);

  export default router;
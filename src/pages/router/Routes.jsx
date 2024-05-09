import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement : <ErrorPage></ErrorPage>
    },
  ]);

  export default router;
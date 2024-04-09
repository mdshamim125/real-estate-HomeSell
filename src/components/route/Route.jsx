import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import UpdateProfile from "../../pages/update-profile/UpdateProfile";
import PrivateRoute from "../private-route/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },

      // {
      //   path: "/about-us",
      //   element: <AboutUs></AboutUs>,
      // },
    ],
  },
]);

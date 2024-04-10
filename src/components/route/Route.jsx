import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import UpdateProfile from "../../pages/update-profile/UpdateProfile";
import PrivateRoute from "./../private-route/PrivateRoute";
import CategoryDetails from "../categoryDetails/CategoryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
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
      {
        path: "/category-details/:id",
        element: (
          // <PrivateRoute>
          <CategoryDetails></CategoryDetails>
          // </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${"/fakeData.json"}/${params.id}`),
      },
    ],
  },
]);

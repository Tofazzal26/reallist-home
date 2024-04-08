import { createBrowserRouter } from "react-router-dom";
import Root from "./../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "./../Pages/Register/Register";
import UpdateProfile from "./../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "./../Pages/UserPrifile/UserProfile";
import Login from "./../Pages/Login/Login";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
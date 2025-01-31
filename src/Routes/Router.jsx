import { createBrowserRouter } from "react-router-dom";
import Root from "./../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "./../Pages/Register/Register";
import UpdateProfile from "./../Pages/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Login from "./../Pages/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import ViewProperty from "../Components/ViewProperty/ViewProperty";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import About from "./../Pages/About/About";
import Property from "../Pages/Property/Property";
import Contact from "../Pages/Contact/Contact";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/viewProperty/:id",
        element: (
          <PrivateRouter>
            <ViewProperty />
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouter>
            <UpdateProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/property",
        element: (
          <PrivateRouter>
            <Property />
          </PrivateRouter>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;

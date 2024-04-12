import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Reallist Homes | Home</title>
      </Helmet>
      <Navbar />
      <div className="container mx-auto roboto-fonts">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto roboto-fonts">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

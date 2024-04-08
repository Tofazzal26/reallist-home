import { NavLink } from "react-router-dom";
import logo from "../../../public/icons/logo.png";
const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[18px]"
            : "font-semibold text-[18px] text-white"
        }
        to="/"
      >
        <li className="hover:text-[#1a56db]">Home</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[18px]"
            : "font-semibold text-[18px] text-white"
        }
        to="/updateProfile"
      >
        <li className="hover:text-[#1a56db]">Update Profile</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[18px]"
            : "font-semibold text-[18px] text-white"
        }
        to="/userProfile"
      >
        <li className="hover:text-[#1a56db]">User Profile</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-[#1f2937]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] text-white font-semibold space-x-8 text-[18px] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <button className="btn btn-ghost text-white text-xl">
            <img className="md:h-full h-[30px]" src={logo} alt="" />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white font-semibold space-x-8 text-[18px] px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login">
            <button className=" text-white px-4 py-2 md:px-6 md:py-2 bg-[#1a56db] hover:scale-[1.1] transition text-sm md:text-[18px] font-semibold rounded-md">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

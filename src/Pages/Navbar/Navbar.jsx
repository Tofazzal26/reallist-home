import { NavLink } from "react-router-dom";
import logo from "../../../public/icons/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import profileImg from "../../../public/icons/profile.png";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const { email, displayName, photoURL } = user || {};
  console.log(photoURL);
  const [showEmail, setShowEmail] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[20px]"
            : "font-semibold text-[20px] text-white"
        }
        to="/"
      >
        <li className="hover:text-[#1a56db]">Home</li>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[20px]"
            : "font-semibold text-[20px] text-white"
        }
        to="/property"
      >
        <li className="hover:text-[#1a56db]">Property</li>
      </NavLink>

      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#1a56db] font-semibold text-[20px]"
              : "font-semibold text-[20px] text-white"
          }
          to="/userProfile"
        >
          <li className="hover:text-[#1a56db]">Profile</li>
        </NavLink>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[20px]"
            : "font-semibold text-[20px] text-white"
        }
        to="/updateProfile"
      >
        <li className="hover:text-[#1a56db]">Update Profile</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#1a56db] font-semibold text-[20px]"
            : "font-semibold text-[20px] text-white"
        }
        to="/about"
      >
        <li className="hover:text-[#1a56db]">About</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-[#1f2937] py-2">
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
          {user ? (
            <div className="relative">
              <div className={`${showEmail ? "flex" : "hidden"}`}>
                <div className="bg-[#1a56db] lg:w-[250px] rounded-md text-white absolute right-[210px] top-[20px]">
                  <div className="p-4 font-semibold">
                    <h1>{displayName || "Not found"}</h1>
                    <h1>{email}</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 cursor-pointer">
                <div
                  onMouseLeave={() => setShowEmail(false)}
                  onMouseEnter={() => setShowEmail(true)}
                >
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={photoURL || profileImg} />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  className=" text-white px-4 py-2 lg:px-8 lg:py-3 bg-[#1a56db] hover:scale-[1.1] transition text-sm lg:text-[20px] font-semibold rounded-md"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <button className=" text-white px-4 py-2 lg:px-8 lg:py-3 bg-[#1a56db] hover:scale-[1.1] transition text-sm lg:text-[20px] font-semibold rounded-md">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive && "text-[#1a56db] font-semibold text-[18px]"
        }
        to="/"
      >
        <li className="hover:text-[#1a56db]">
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "text-[#1a56db] font-semibold text-[18px]"
        }
        to="/register"
      >
        <li className="hover:text-[#1a56db]">
          <a>Register</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "text-[#1a56db] font-semibold text-[18px]"
        }
        to="/updateProfile"
      >
        <li className="hover:text-[#1a56db]">
          <a>Update Profile</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive && "text-[#1a56db] font-semibold text-[18px]"
        }
        to="/userProfile"
      >
        <li className="hover:text-[#1a56db]">
          <a>User Profile</a>
        </li>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <button className="btn btn-ghost text-white text-xl">
            Realist-Homes
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white font-semibold  text-[18px] px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

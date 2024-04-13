import { NavLink } from "react-router-dom";
import logo from "../../../public/icons/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#1f2937] mt-14">
        <div className="p-16 space-y-6">
          <div>
            <div>
              <img className="mx-auto" src={logo} alt="" />
            </div>

            <div className="lg:ml-[500px] lg:my-12">
              <div className="text-white grid grid-cols-1 cursor-pointer lg:grid-cols-5 justify-center items-center">
                <ul className="space-y-4">
                  <li className="md:text-xl text-[#ff8819] text-sm font-semibold">
                    Facilities
                  </li>
                  <li>Townhouses</li>
                  <li>Apartments</li>
                  <li> Single-family</li>
                  <li>Vacation-rentals</li>
                </ul>
                <ul className="space-y-4">
                  <li className="md:text-xl text-sm text-[#ff8819] font-semibold">
                    Pricing
                  </li>
                  <li>Overview</li>
                  <li>Premium Plan</li>
                  <li>Affiliate Program</li>
                  <li>Promotions</li>
                </ul>
                <ul className="space-y-4">
                  <li className="md:text-xl text-sm text-[#ff8819] font-semibold">
                    Support
                  </li>
                  <li>Negotiation</li>
                  <li>Education</li>
                  <li> Virtual tours</li>
                  <li>Open houses</li>
                  <li>photography</li>
                </ul>
                <ul className="space-y-4">
                  <li className="md:text-xl text-sm text-[#ff8819] font-semibold">
                    Reallist
                  </li>

                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                    <NavLink to="/property">Property</NavLink>
                  </li>
                  <li>
                    <NavLink to="/updateProfile">Update Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-white md:text-base text-center text-sm font-semibold">
            Copyright © 2024 <span className="text-[#ff8819]">Reallist</span>{" "}
            All rights reserved.
          </p>
          <div className="space-x-2 md:space-y-0 space-y-4 text-center">
            <button className="bg-[#ff8819] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold">
              Townhouses
            </button>
            <button className="bg-[#05a01f] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold">
              Apartments
            </button>
            <button className="bg-[#1229b1] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold">
              Single-family
            </button>
            <button className="bg-[#0da3e6] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold">
              Vacation-rentals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

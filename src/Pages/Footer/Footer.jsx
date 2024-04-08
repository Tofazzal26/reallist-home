import logo from "../../../public/icons/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#1f2937] mt-14">
        <div className="text-center p-16 space-y-6">
          <img className="mx-auto" src={logo} alt="" />
          <p className="text-white md:text-base text-sm font-semibold">
            Copyright © 2024 <span className="text-[#ff8819]">Reallist</span>{" "}
            All rights reserved.
          </p>
          <div className="space-x-2 md:space-y-0 space-y-4">
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

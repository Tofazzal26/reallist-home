import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { GiInjustice } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const StateCard = ({ card }) => {
  const {
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = card;

  return (
    <div>
      <div className="card card-compact lg:h-[650px] rounded-none shadow-loginSd">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1400"
            className="text-lg  text-gray-500 font-semibold"
          >
            {segment_name}
          </p>
          <h2
            data-aos="fade-left"
            data-aos-delay="1100"
            data-aos-duration="1500"
            className="card-title"
          >
            {estate_title}
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="1200"
            data-aos-duration="1600"
            className="text-lg text-gray-500"
          >
            {description}
          </p>

          <p
            data-aos="fade-left"
            data-aos-delay="1300"
            data-aos-duration="1700"
            className="text-[#f7505c] text-2xl"
          >
            {price}
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="1400"
            data-aos-duration="1800"
            className="text-lg text-gray-500"
          >
            {`${facilities[0]},
            ${facilities[1]},
            ${facilities[2]}`}
          </p>

          <div
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-duration="1900"
            className="flex lg:flex-row flex-col items-center"
          >
            <p className="text-lg font-semibold text-gray-600">Area: {area}</p>
            <p className="flex items-center text-[17px] font-semibold text-gray-600">
              <IoLocationSharp size={26} color="#f7505c" />
              {location}
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1600"
            data-aos-duration="2000"
            className="flex lg:flex-row flex-col items-center gap-4 lg:gap-[160px]"
          >
            <NavLink to={`/viewProperty/${id}`}>
              <button className="bg-[#1d1f1f] text-white flex items-center text-[18px] font-semibold gap-4 px-4 py-4">
                View Property <FaArrowRight />
              </button>
            </NavLink>
            <p className="flex gap-2">
              <span className="text-lg font-semibold text-gray-600">
                {status}
              </span>
              <span className="flex items-center gap-2">
                <FaHome size={26} color="#f7505c" />
                <GiInjustice size={26} color="#1d1f1f" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCard;

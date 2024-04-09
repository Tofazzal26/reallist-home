import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { GiInjustice } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
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
          <p className="text-lg  text-gray-500 font-semibold">{segment_name}</p>
          <h2 className="card-title">{estate_title}</h2>
          <p className="text-lg text-gray-500">{description}</p>

          <p className="text-[#f7505c] text-2xl">{price}</p>
          <p className="text-lg text-gray-500">Facilities: {facilities}</p>

          <div className="flex lg:flex-row flex-col items-center">
            <p className="text-lg font-semibold text-gray-600">Area: {area}</p>
            <p className="flex items-center text-[17px] font-semibold text-gray-600">
              <IoLocationSharp size={26} color="#f7505c" />
              {location}
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-[160px]">
            <button className="bg-[#1d1f1f] text-white flex items-center text-[18px] font-semibold gap-4 px-4 py-4">
              View Property <FaArrowRight />
            </button>
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

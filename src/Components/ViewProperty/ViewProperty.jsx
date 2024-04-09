import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { GiInjustice } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
const ViewProperty = () => {
  const { id } = useParams();
  const { stateData, loading } = useContext(AuthContext);
  const [detailsView, setDetailsViews] = useState();

  useEffect(() => {
    const singleData = stateData.find((cardId) => cardId.id == +id);
    setDetailsViews(singleData);
  }, [id, stateData]);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = detailsView || {};

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <img className="w-full lg:h-[500px]" src={image} alt="" />
        </div>
        <div className="col-span-1">
          <div className="card-body">
            <p className="text-[22px]  text-gray-500 font-semibold">
              {segment_name}
            </p>
            <h2 className="card-title text-[25px]">{estate_title}</h2>
            <p className="text-[20px] text-gray-500">{description}</p>

            <p className="text-[#f7505c] text-3xl">{price}</p>
            <p className="text-[20px] text-gray-500">
              Facilities: {facilities}
            </p>

            <div className="flex lg:flex-row flex-col items-center">
              <p className="text-[18px] font-semibold text-gray-600">
                Area: {area}
              </p>
              <p className="flex items-center text-[18px] font-semibold text-gray-600">
                <IoLocationSharp size={26} color="#f7505c" />
                {location}
              </p>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-[160px]">
              <NavLink to="/">
                <button className="bg-[#1d1f1f] text-white flex items-center text-[20px] font-semibold gap-4 px-4 py-4">
                  Go Home <FaArrowRight />
                </button>
              </NavLink>
              <p className="flex gap-2">
                <span className="text-[20px] font-semibold text-gray-600">
                  {status}
                </span>
                <span className="flex items-center gap-2">
                  <FaHome size={30} color="#f7505c" />
                  <GiInjustice size={30} color="#1d1f1f" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;

import { NavLink } from "react-router-dom";

const PropertyCard = ({ cardPr }) => {
  const { image, location, facilities, estate_title, id } = cardPr;

  return (
    <div>
      <div className="card card-compact lg:h-[500px] rounded-none shadow-loginSd">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{estate_title}</h2>
          <div className="flex items-center text-[#f7505c] text-base ">
            <p>{facilities[0]}</p>
            <p>{facilities[1]}</p>
            <p>{facilities[2]}</p>
          </div>
          <p className="font-semibold text-lg text-gray-600">{location}</p>
          <div className="card-actions">
            <NavLink to={`/viewProperty/${id}`}>
              <button className="bg-[#1d1f1f] text-white flex items-center text-[18px] font-semibold gap-4 px-4 py-4">
                Show Property
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

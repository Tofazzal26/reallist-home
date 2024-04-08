import { IoLocationSharp } from "react-icons/io5";
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
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{segment_name}</p>
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>

          <p>{price}</p>
          <p>Facilities: {facilities}</p>

          <div className="flex">
            <p>Area: {area}</p>
            <p className="flex items-center">
              <IoLocationSharp />
              {location}
            </p>
          </div>
          <div>
            <button>View Property</button>
            <p>
              {status}
              <FaHome />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCard;

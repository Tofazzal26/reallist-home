import { Helmet } from "react-helmet-async";
import useHook from "../../useHook/useHook";
import PropertyCard from "./PropertyCard";

const Property = () => {
  const { stateData, loading } = useHook();
  return (
    <div>
      <Helmet>
        <title>Reallist Homes | Property</title>
      </Helmet>
      <h1 className="text-center text-4xl my-6 font-semibold">Our Property</h1>
      <div data-aos="zoom-in" data-aos-duration="1000">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateData.map((cardPr) => (
            <PropertyCard key={cardPr.id} cardPr={cardPr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Property;

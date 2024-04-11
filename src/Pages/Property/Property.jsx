import useHook from "../../useHook/useHook";
import PropertyCard from "./PropertyCard";

const Property = () => {
  const { stateData, loading } = useHook();
  return (
    <div>
      <div>
        {stateData.map((cardPr) => (
          <PropertyCard key={cardPr.id} cardPr={cardPr} />
        ))}
      </div>
    </div>
  );
};

export default Property;

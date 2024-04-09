import { useContext } from "react";
import useHook from "../../useHook/useHook";
import StateCard from "../StateCard/StateCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Estate = () => {
  const { stateData } = useContext(AuthContext);

  return (
    <div>
      <div className="my-10 space-y-2">
        <h1 className="text-base lg:text-4xl text-center font-semibold">
          Do You Want to Visit a Property? We’ll Get Back to You!
        </h1>
        <p className="lg:text-base text-center text-sm text-gray-500 font-semibold mx-auto lg:w-[800px]">
          We`re choosing building materials carefully, to avoid harmful toxins
          and to create a truly environmentally friendly home We have our own
          service department to ensure your comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stateData.map((card) => (
          <StateCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Estate;

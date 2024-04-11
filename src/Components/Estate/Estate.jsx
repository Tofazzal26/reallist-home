import { useContext } from "react";

import StateCard from "../StateCard/StateCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
const Estate = () => {
  const { stateData, loading } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="mt-12">
          <div className="divider divider-info lg:px-[200px]">
            <FaHome size={100} />
          </div>
        </div>
      </div>
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
      {loading && (
        <div className="flex justify-center items-center">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stateData.map((card) => (
          <StateCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Estate;

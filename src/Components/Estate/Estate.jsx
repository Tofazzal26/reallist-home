import { useContext } from "react";
import useHook from "../../useHook/useHook";
import StateCard from "../StateCard/StateCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Estate = () => {
  const { stateData } = useContext(AuthContext);

  return (
    <div>
      {stateData.map((card) => (
        <StateCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Estate;

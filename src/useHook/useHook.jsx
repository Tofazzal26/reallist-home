import { useEffect, useState } from "react";

export const useHook = () => {
  const [stateData, setStateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("Estate.json")
      .then((res) => res.json())
      .then((data) => setStateData(data));
    setLoading(false);
  }, []);

  return { stateData, loading };
};

export default useHook;

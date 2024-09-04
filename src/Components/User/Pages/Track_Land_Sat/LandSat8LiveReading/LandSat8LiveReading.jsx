import { useEffect, useState } from "react";
import { getLandSat8 } from "../../../../../api/landSat8";
import UseToGetLandSatLocation from "../../../../../Hooks/LandSat8Api/UseToGetLandSatLocation";

const LandSat8LiveReading = () => {
  const [landSat8Position, refetch] = UseToGetLandSatLocation();
  console.log(landSat8Position);

  const [landSatData, setLandSatData] = useState({});

  useEffect(() => {
    const data = getLandSat8();
    setLandSatData(data);
  }, []);

  console.log(landSatData);

  return <div></div>;
};

export default LandSat8LiveReading;

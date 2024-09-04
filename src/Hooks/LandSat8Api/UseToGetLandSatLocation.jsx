import { useQuery } from "@tanstack/react-query";
import axios from "../../api/index";

const UseToGetLandSatLocation = () => {
  const { data: landSat8Position = [], refetch } = useQuery({
    queryKey: ["landSat8"],
    queryFn: async () => {
      const res = await axios.get("/landsat8");
      return res.data;
    },
  });
  return [landSat8Position, refetch];
};

export default UseToGetLandSatLocation;

import axios from "../api/index";

export const getLandSat8 = async () => {
  const response = await axios.get("/landSat8");
  return response.data;
};

import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const fetchState = async (): Promise<string> => {
  const response = await axios.get(`${BASE_URL}/state`);
  return response.data.odds;
};

export const fetchMappings = async (): Promise<string> => {
  const response = await axios.get(`${BASE_URL}/mappings`);
  return response.data.mappings;
};

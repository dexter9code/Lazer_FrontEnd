import { useQuery } from "react-query";
import { apiUrl } from "../api/apiUrl";

const fetchItems = async () => {
  return await apiUrl.get("/products");
};

export const useItemsData = () => {
  return useQuery("cloths", fetchItems, {});
};

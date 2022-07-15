import { useMutation } from "react-query";
import { apiUrl } from "./../api/apiUrl";

export const getUser = (user) => {
  return apiUrl.post("/auth", user);
};

export const useValidateUser = () => {
  return useMutation(getUser);
};

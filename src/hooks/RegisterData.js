import { useMutation } from "react-query";

import { apiUrl } from "./../api/apiUrl";

const addUser = (userData) => {
  return apiUrl.post("/users", userData);
};

export const useAddUserData = () => {
  return useMutation(addUser);
};

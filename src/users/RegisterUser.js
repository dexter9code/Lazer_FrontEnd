import { apiUrl } from "../api/apiUrl";

const RegisterUser = async (userdata) => {
  const user = await apiUrl.post("/users", userdata);
  if (!user.ok) return;
  console.log(user.data);
  localStorage.setItem("token", user.headers["x-auth-token"]);
};

export default RegisterUser;

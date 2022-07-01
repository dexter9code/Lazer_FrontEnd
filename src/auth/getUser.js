import jwtDecode from "jwt-decode";

const getUser = () => {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export default getUser;

import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { apiUrl } from "../api/apiUrl";


const GoogleIdentity = () => {
  const handleLogin = async (response) => {
    console.log("Encoded JWT ID token:" + response.credential);
    const user = jwt_decode(response.credential);
    const data = {
      email: user.email,
      name: user.name,
    };
    const res=await apiUrl.post('/google',data)
    console.log(res);
  };

//   const senddata = async () => {
//     const check = {
//       eamil: "adk@gmail.com",
//       email_verified: "true",
//       name: "bitch",
//     };
//     const res = await apiUrl.post("/googlelogin", check);
//   };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "766456860670-dhmbi6g0v02nhl7g7e9dc0oldq1h8s2k.apps.googleusercontent.com",
      callback: handleLogin,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div id="container" >
      <div id="signInDiv" className="text-center items-center"></div>
      <button >send</button>
    </div>
  );
};

export default GoogleIdentity;

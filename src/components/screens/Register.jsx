import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import { RegisterSchema } from "../../validations/RegisterValid";
import FormField2 from "../common/FormField2";
import loginImage from "../../assets/images/loginImage1.jpg";
import { apiUrl } from "../../api/apiUrl";
import { useAddUserData } from "../../hooks/RegisterData";

const Register = () => {
  const [serverError, setServerError] = useState(false);
  const { mutate, error, data } = useAddUserData();

  const handleRegister = async ({ name, email, password }) => {
    const userdata = { name, email, password };
    mutate(userdata);
    if (error) return setServerError(true);
    setServerError(false);
    localStorage.setItem("token", data.headers["x-auth-token"]);
    window.location = "/";
  };

  const handleLogin = async (response) => {
    const res = await response.credential;
    localStorage.setItem("token", res);
    const data = jwt_decode(res);
    const userData = {
      email: data.email,
      name: data.name,
    };
    const send = await apiUrl.post("/google", userData);
    window.location = "/";
  };

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
    <div className="md:flex align-middle lg:flex justify-evenly">
      <img
        src={loginImage}
        className="blur-sm -z-20 h-full w-full absolute object-cover"
      />
      <div className=" rounded-md shadow-2xl border shadow-blue-700 border-blue-500  mt-10 py-2 px-12">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => handleRegister(values)}
        >
          {() => (
            <div>
              <div className="text-3xl uppercase font-bold text-center mb-5 p-5 text-white">
                <h1>Register</h1>
              </div>
              {serverError === true ? (
                <p className="text-center text-white">Email already Exists</p>
              ) : null}
              <div className=" ">
                <Form>
                  <FormField2 name={"name"} title={"Name"} />
                  <FormField2 name={"email"} title={"Email"} />
                  <FormField2 name={"password"} title={"Password"} />
                  <button
                    type="submit"
                    className="text-xl ml-44 mt-3 px-5 py-2  font-semibold bg-gradient-to-r from-[#1e90ff] to-red-500 rounded-3xl text-white capitalize shadow-md shadow-blue-800"
                  >
                    Submit
                  </button>
                </Form>
                <div className="mb-5 ml-6 px-3 py-2 text-center text-white">
                  <p className="text-sm font-medium">
                    Already a User?
                    <span className="italic cursor-pointer">
                      <Link to={"/lazer/Login"}>Login</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Formik>
        <div className="border-y-2 border-purple-400 w-[450px] rounded-lg px-2 mb-5 text-center" />
        <div>
          <p className="text-center capitalize text-lg font-semibold text-white">
            Or Sign Up with
          </p>
          <div className="flex justify-evenly mt-5 mb-3">
            <div id="signInDiv" className="text-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

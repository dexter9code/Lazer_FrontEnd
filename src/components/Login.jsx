import React from "react";
import { Formik, Form } from "formik";

import loginImage from "../assets/images/loginImage1.jpg";
import { LoginValidation } from "./../validations/LoginValidation";
import FormField from "./common/FormField2";
import { apiUrl } from "./../api/apiUrl";

const Login = () => {
  const handleLogin = async ({ email, password }) => {
    const userData = { email, password };
    const res = await apiUrl.post("/auth", userData);
    localStorage.setItem("token", res.data);
    console.log(res.data);
    window.location='/'
  };
  return (
    <div className="w-full h-[90vh] overflow-hidden">
      <img
        src={loginImage}
        className="blur-sm -z-20 h-full w-full absolute object-cover"
      />
      <div className="flex justify-center ">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginValidation}
          onSubmit={(values) => handleLogin(values)}
        >
          {() => (
            <div className="mt-48 px-10  broder rounded-sm shadow-2xl shadow-blue-700 border-blue-500 ">
              <div className="text-center mt-10">
                <h1 className="text-3xl font-bold capitalize text-white">
                  Welcome To Lazer
                </h1>
              </div>
              <div className=" p-5">
                <Form>
                  
                  <FormField name={"email"} title={"Email"} placeholder={'@example.com'} />
                  <FormField name={"password"} title={"Password"} placeholder={'Enter Password'} />
                  <button
                    type="submit"
                    className="text-xl ml-44 mt-3 px-5 py-2  font-semibold bg-gradient-to-r from-[#1e90ff] to-red-500 rounded-3xl text-white capitalize shadow-md shadow-blue-800"
                  >
                    Submit
                  </button>
                </Form>
                <div className="mb-5 ml-6 px-3 py-2 text-center text-white ">
                  <p className="text-sm font-medium">
                    Not a User?
                    <span className="italic cursor-pointer">Register</span>
                  </p>
                </div>
                <div className="border-y-2 border-purple-400 w-[450px] rounded-lg px-2 mb-5 text-center" />
                <div className="flex justify-evenly mt-5 mb-3">
                  <div className="bg-white py-2 ml-5 flex justify-center rounded-lg hover:shadow-lg hover:bg-gray-300 w-[100px]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                      alt="google"
                      className="w-[40px]"
                    />
                  </div>
                  <div className="bg-white py-2 ml-5 flex justify-center rounded-lg hover:shadow-lg hover:bg-gray-300 w-[100px]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                      alt="facebook"
                      className="w-[40px]"
                    />
                  </div>
                  <div className="bg-white py-2 ml-5 flex justify-center rounded-lg hover:shadow-lg hover:bg-gray-300 w-[100px]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                      alt="apple"
                      className="w-[40px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Formik, Form } from "formik";

import { RegisterSchema } from "../validations/RegisterValid";
import FormField from "./common/FormField";
import RegSvg from "./common/RegisterSvg";
import RegisterUser from "../users/RegisterUser";
import { apiUrl } from "../api/apiUrl";

const Register = () => {
  const [serverError, setServerError] = useState(false);
  const handleRegister = async ({ name, email, password }) => {
    const userdata = { name, email, password };
    const res = await apiUrl.post("/users", userdata);
    if (res!='OK') {
      setServerError(true)
      console.log(serverError)
    }
    setServerError(false);
    console.log(serverError);
    console.log(res.data);
    localStorage.setItem("token", res.headers["x-auth-token"]);
  };
  return (
    <div className="md:flex align-middle lg:flex justify-evenly">
      <div className="invisible lg:visible">
        <RegSvg />
      </div>
      <div className="border-2 rounded-md shadow-md shadow-slate-800 mt-3 py-2 px-12">
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
              <div className="text-3xl font-bold text-center mb-5 p-5">
                <h1>Register</h1>
              </div>
              {serverError === true ? (
                <p className="text-center">Email already Exists</p>
              ) : (
                <p className="text-center">test</p>
              )}
              {console.log(serverError)}
              <div>
                <Form>
                  <FormField name={"name"} title={"Name"} />
                  <FormField name={"email"} title={"Email"} />
                  <FormField name={"password"} title={"Password"} />
                  <button
                    type="submit"
                    className="text-xl ml-44 mt-3 px-5 py-2  font-semibold bg-gradient-to-r from-[#1e90ff] to-red-500 rounded-3xl text-white capitalize shadow-md shadow-blue-800"
                  >
                    Submit
                  </button>
                </Form>
                <div className="mb-5 ml-6 px-3 py-2 text-center ">
                  <p className="text-sm font-medium">
                    Already a User?
                    <span className="italic cursor-pointer">Login</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Formik>
        <div className="border-y-2 border-purple-400 w-[450px] rounded-lg px-2 mb-5 text-center" />
        <div>
          <p className="text-center capitalize text-lg font-semibold">
            Or Sign Up with
          </p>
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
    </div>
  );
};

export default Register;

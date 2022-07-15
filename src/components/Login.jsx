import React,{useState} from "react";
import { Formik, Form } from "formik";

import LoginSvg from './common/LoginSvg'
import { LoginValidation } from "./../validations/LoginValidation";
import FormField from "./common/FormField";
import { apiUrl } from "./../api/apiUrl";
import loginimage1 from '../assets/svg/loginCenter.svg'
import loginimage2 from '../assets/svg/realleft.svg'
import { useValidateUser } from "../hooks/LoginData";


const Login = () => {
  const{data,error,mutate}= useValidateUser()
  const [loginError, setLoginError] = useState(false)

  const handleLogin = async ({ email, password }) => {
    const userData = { email, password };
    mutate(userData)
    if(error) return setLoginError(true)
    setLoginError(false)
    localStorage.setItem("token", data.data);
    window.location='/'
  };
  return (
    <div className="w-full h-[90vh] overflow-hidden flex justify-evenly bg-transparent">
      <img src={loginimage2} alt="" className="absolute -z-30 left-0 w-[550px]" />
      <img src={loginimage1} alt="" className="absolute -z-30" />
     <div className="invisible lg:visible mt-5 rounded-md bg-transparent shadow-lg w-[700px] h-[700px]">
        <LoginSvg />
     </div>
      <div className="flex justify-center  lg:w-[600px] h-[650px]">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginValidation}
          onSubmit={(values) => handleLogin(values)}
        >
          {() => (
            <div className="mt-10 px-10  rounded-md shadow-lg shadow-blue-700  ">
              <div className="text-center mt-10">
                <h1 className="text-3xl font-bold capitalize ">
                  Welcome Back to Lazer
                </h1>
                {loginError && <h1 className="text-base text-red-600 font-semibold italic mt-5 capitalize">Invalid email or Password</h1>}
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

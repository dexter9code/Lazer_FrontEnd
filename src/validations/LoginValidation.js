import * as Yup from "yup";

export const LoginValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .max(255)
    .required("Please Enter the Email")
    .label("Email"),
  password: Yup.string()
    .min(5, "Too Short")
    .max(255, "Too Long")
    .required("Please Provide the Password")
    .label("Password"),
});

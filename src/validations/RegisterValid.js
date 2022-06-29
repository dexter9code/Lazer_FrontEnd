import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short")
    .max(30, "Too Long")
    .required()
    .label("Name"),
  email: Yup.string()
    .email()
    .min(9, "Too Short")
    .max(255, "Too Long")
    .required()
    .label("Email"),
  password: Yup.string()
    .min(5, "Too Short")
    .max(255, "Too Long")
    .required()
    .label("Password"),
});

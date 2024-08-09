import * as yup from "yup";

export let passwordRule = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/;

export const registerSchema = yup.object({
  username: yup.string().required("username is required"),
  email: yup.string().email("Invalid email format entered").required("email is required"),
  password: yup
    .string()
    .matches(passwordRule, {
      message:
        "password must be at least 6 long in length and it is expected to contain digits, letter",
    })
    .required("password is required"),
});

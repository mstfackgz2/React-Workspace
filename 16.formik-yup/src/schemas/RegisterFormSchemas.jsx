import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("email address not valid")
    .required("Enter An Email"),
  age: yup.number().positive("enter positive").integer("enter integer"),
  password: yup.string().required("enter password"),
  confirmPassword: yup
    .string()
    .required("enter password")
    .oneOf([yup.ref("password", yup.password)]),
  term: yup.boolean().required("Select that"),
});

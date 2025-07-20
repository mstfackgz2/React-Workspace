import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";
function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas,
  });
  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter An Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label htmlFor="">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter Your Age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label htmlFor="">Repeat Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Your Password Again"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div className="inputDiv">
          <input
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          <label htmlFor="">Accept the user agreement </label>
          {errors.term && <p>{errors.term}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;

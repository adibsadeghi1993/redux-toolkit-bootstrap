import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "is short")
    .max(15, "is long")
    .required("نام و نام خانوادگی الزامی است"),
  email: Yup.string().email("ایمیل صحیح نیست").required("ایمیل الزامی است"),
  password: Yup.string()
    .min(8, "حداقل 8 کارکتر")
    .required(" رمز عبور الزامی است"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });

  const submitHandler=()=>{
      console.log(formik.values)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          {...formik.getFieldProps("name")}
        />
        <label>email:</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
        <label>email:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          {...formik.getFieldProps("password")}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;

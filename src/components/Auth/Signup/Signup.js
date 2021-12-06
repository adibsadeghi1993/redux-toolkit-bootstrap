import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/reducers/AuthReducer";
import styles from "./Signup.module.css";
import Inputs from "../Inputs";

const validationSchema = Yup.object({
 name: Yup.string()
    .min(3, "is short")
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
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);
    dispatch(signup(formik.values));
  };
  console.log(formik.errors)
  return (
    <div>
    

      <div className="container-xl">
        <div className="row mt-5">
          <div className="col-md-6">
          <h3 className="text-center">Signup</h3>
            <form onSubmit={submitHandler} novalidate>
              <Inputs name="name" type="text" formik={formik}/>
              <Inputs name="email" type="email" formik={formik}/>
              <Inputs name="password" type="password" formik={formik}/>
             <div className="d-flex justify-content-center">
             <button type="submit" className="btn btn-primary mt-3">
                submit
              </button>
             </div>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

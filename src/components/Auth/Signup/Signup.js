import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/reducers/AuthReducer";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import queryString from "query-string"

import Inputs from "../Inputs";
import signupImage from "../../../assets/Peach-Illustration-System@4x-p4dbc2wf9kr7ktx00bvzs0sxnfq0v4qmervqvdd17k.png";

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
  const navigate = useNavigate("");
  const location=useLocation()
  const query=queryString.parse(location.search);

  console.log(query)
  const userInfo = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues:
      {
        name: userInfo.userInfo?.name,
        email: userInfo.userInfo?.email,
        password: userInfo.userInfo?.password,
      } || initialValues,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });

  useEffect(() => {
    setTimeout(() => {
      console.log(userInfo.userInfo?.email);
      if (userInfo.userInfo?.email && !query.from) {
        navigate("/");
      }
     

    }, 2000);
    if (userInfo.userInfo?.email && query.from) {
      navigate("/checkout");
    }
  }, [userInfo.userInfo?.email]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(signup(formik.values));
  };

  return (
    <div className="container-xl">
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="text-center">ثبت نام</h3>
          {userInfo.loading && (
            <div class="text-center">
              <div
                class="spinner-border text-primary my-2"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {userInfo.erroeMessage && (
            <div className="bg-danger  text-white py-2 rounded my-2">
              {userInfo.erroeMessage}
            </div>
          )}
          {userInfo.successMessage && (
            <div className="bg-primary text-center text-white py-2 rounded my-2">
              {userInfo.successMessage}
            </div>
          )}
          <form onSubmit={submitHandler} novalidate>
            <Inputs
              name="name"
              label="نام و نام خانوادگی"
              type="text"
              formik={formik}
            />
            <Inputs name="email" label="ایمیل" type="email" formik={formik} />
            <Inputs
              name="password"
              label="پسورد"
              type="password"
              formik={formik}
            />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3 w-100">
                ارسال
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={signupImage} alt="عکس ثبت نام" />
        </div>
      </div>
    </div>
  );
};

export default Signup;

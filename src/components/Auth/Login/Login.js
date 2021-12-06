import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import Inputs from "../Inputs";
import { login } from "../../../redux/reducers/AuthReducer";

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
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });
  console.log(userInfo)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);
    dispatch(login(formik.values))
  };
  return (
    <div>
      <div className="container-xl">
        <div className="row mt-5 ">
          <div className="col-md-6 offset-md-3">
            <h3 className="text-center">ورود</h3>
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
          {userInfo.erroeMessage&&<div className="bg-danger text-center  text-white py-2 rounded my-2">{userInfo.erroeMessage}</div>}
          {userInfo.successMessage&&<div className="bg-primary text-center text-white py-2 rounded my-2">{userInfo.successMessage}</div>}
            <form onSubmit={submitHandler} novalidate>
              <Inputs name="email" label="ایمیل" type="email" formik={formik} />
              <Inputs name="password" label="پسورد" type="password" formik={formik} />
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mt-3">
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

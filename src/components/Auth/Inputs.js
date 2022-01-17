const Inputs = ({ name, formik, type, label }) => {
  return (
    <div className="mt-2">
      <label for="validationCustom02" class="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${
          formik.values[name] && !formik.errors[name] && "is-valid"
        } ${formik.errors[name] && formik.touched[name] ? "is-invalid" : ""}`}
        value={formik.values[name]}
        {...formik.getFieldProps({ name })}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="invalid-feedback d-block">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Inputs;

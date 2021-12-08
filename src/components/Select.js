const SelectComponent = ({ setSelect, select }) => {
  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div className="select mt-5">
      <select
        onChange={handleChange}
        class="form-select"
        aria-label="Default select example"
      >
        <option selected value="all" style={{ fontSize: "0.8rem" }}>
          دسته بندی
        </option>
        <option value="sport"> اسپرت </option>
        <option value="electonic">وسایل الکترونیکی</option>
      </select>
    </div>
  );
};

export default SelectComponent;

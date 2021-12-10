import { FormLabel } from "@mui/material";
import React from "react";

const Sort = ({ setSorted, sort }) => {
  return (
    <div className="d-flex flex-wrap  mt-5">
        <div><span className="me-2">ترتیب قیمت ها</span></div>
     
  
      <div class="form-check form-check-inline">
  <input class="form-check-input"  checked={sort === "0"}   onChange={(e) => setSorted(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0"/>
  <label class="form-check-label" for="inlineRadio1">نزولی</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" checked={sort === "1"}   onChange={(e) => setSorted(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1"/>
  <label class="form-check-label" for="inlineRadio2">صعودی</label>
</div>
    </div>
  );
};

export default Sort;

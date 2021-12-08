import { FormLabel } from "@mui/material";
import React from "react";

const Sort = ({ setSorted, sort }) => {
  return (
    <div className="d-flex align-items-center mt-5">
        <span>ترتیب قیمت ها</span>
      <span className="ms-3">
        <label className="mb-1 me-1">نزولی</label>
        <input
          type="radio"
          checked={sort === "0"}
          value="0"
          onChange={(e) => setSorted(e.target.value)}
        />
      </span>
      <span className="ms-3">
      <label className="mb-1 me-1">صعودی</label>
        <input
          type="radio"
          checked={sort === "1"}
          value="1"
          onChange={(e) => setSorted(e.target.value)}
        />
      </span>
    </div>
  );
};

export default Sort;

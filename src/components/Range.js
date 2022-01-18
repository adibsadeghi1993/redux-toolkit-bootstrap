import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from "react-redux";

function valuetext(value) {
  return `${value}°C`;
}

const Test = ({range,setRange,max,min}) => {

  const { mode } = useSelector((state) => state.switch);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  }

 
  
    return (
    <div className="mt-3">
        <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        style={{color:`${mode?"#ffc107":"blue"}`}}
       
      />
    </Box>
    <p> <span>رنج قیمت انتخابی شما</span><span className={`btn ms-2 ${mode?"btn-outline-warning":"btn-outline-primary"}`}>{range[0]}-{range[1]}</span></p>
    </div>
    );
  };

  export default Test

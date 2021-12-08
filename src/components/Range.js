import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}

const Test = ({range,setRange,max,min}) => {



  const handleChange = (event, newValue) => {
    setRange(newValue);
  }

 
  
    return (
    <div>
        <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
       
      />
    </Box>
    <p> <span>رنج قیمت انتخابی شما</span><span className="ms-2 btn btn-outline-primary">{range[0]}-{range[1]}</span></p>
    </div>
    );
  };

  export default Test

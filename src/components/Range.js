import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}

const Test = ({range,setRange,max}) => {



  const handleChange = (event, newValue) => {
    setRange(newValue);
  }

  const marks = [
    {
      value: 10,
      label: '10',
    },
 
    {
      value: {max},
      label: `${max}`,
    },
  ];
 
  
    return (
    <div>
        <Box sx={{ width: "100%" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={10}
        max={max}
        marks={marks}
      />
    </Box>
    <p>{range[0]}-{range[1]}</p>
    </div>
    );
  };

  export default Test

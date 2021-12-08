import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}°C`;
}

const Test = () => {

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const marks = [
    {
      value: 10,
      label: '10 هزار تومان',
    },
 
    {
      value: 110,
      label: '110 هزار تومان',
    },
  ];
 
  
    return (
    <div>
        <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={10}
        max={110}
        marks={marks}
      />
    </Box>
    <p>{value[0]}-{value[1]}</p>
    </div>
    );
  };

  export default Test

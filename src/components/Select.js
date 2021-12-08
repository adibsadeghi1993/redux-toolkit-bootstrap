import React from 'react'
// import * as React from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';

const SelectComponent = ({setSelect,select}) => {
    const handleChange=(e)=>{
        setSelect(e.target.value)

    }
    return (
        <div className="select mt-4">
        <select onChange={handleChange} class="form-select" aria-label="Default select example">
  <option selected value="all" style={{fontSize:"0.8rem"}}>دسته بندی</option>
  <option value="sport"> اسپرت  </option>
  <option value="electonic">وسایل الکترونیکی</option>
 
</select>
         
            
        </div>
    )
}

export default SelectComponent

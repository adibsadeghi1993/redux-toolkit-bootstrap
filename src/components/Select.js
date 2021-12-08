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
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
         
            
        </div>
    )
}

export default SelectComponent

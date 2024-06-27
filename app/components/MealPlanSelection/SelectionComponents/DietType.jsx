'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setDietType} from '../../../../lib/slices/dietTypeSlice'

export default function DietType() {
  const dietType = useSelector((state) => state.dietType.dietType);
  const dispatch = useDispatch();


  const handleChange = (event) => {
    dispatch(setDietType(event.target.value));
  };
  useEffect(()=>{
    dispatch(setDietType("Keto"));
  },[])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Diet Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dietType}
          label="Diet Type"
          onChange={handleChange}
         
        >
  
          {
            mealTypes.map((mealType, index) => {
              return <MenuItem key={ index} value={mealType}>{mealType}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export const mealTypes = [
  "Keto",
    "Paleo",
    "Atkins",
    "Vegan",
    "Vegetarian",
    "Low Carb",
]
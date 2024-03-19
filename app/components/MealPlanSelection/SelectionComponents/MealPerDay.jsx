'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { setMealsPerDay } from '../../../../lib/slices/mealsPerDaySlice';
export default function DietType() {
  const MealsPerDay = useSelector((state) => state.mealsPerDay.mealsPerDay);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setMealsPerDay(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Meals Per Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={MealsPerDay}
          label="Meals Per Day"
          onChange={handleChange}
        >
  
          {
            mealsPerDay.map((meals, index) => {
              return <MenuItem key={index} value={meals}>{meals}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export const mealsPerDay = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
   
]
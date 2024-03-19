import React, { useState } from 'react';
import { TextField, Chip } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'
import { addAllergy, removeAllergy } from '../../../../lib/slices/allergysSlice';



export default function AllergySelector(){

  const allergys = useSelector(state => state.allergys.allergys);
  const dispatch = useDispatch();

 

  
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      // Prevent form submission or any default action
      event.preventDefault();
      
      // Add the current input value to the allergies array
      dispatch(addAllergy(inputValue.trim()));
      // Reset the input field
      setInputValue('');
    }
  };

  const handleDelete = (allergyToDelete) => () => {
    dispatch(removeAllergy(allergyToDelete));
  };

  return (
    <div>
      <TextField
        label="Food Allergies"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div style={{ marginTop: '10px' }}>
        {allergys.map((allergy, index) => (
          <Chip
            key={index}
            label={allergy}
            onDelete={handleDelete(allergy)}
            style={{ marginRight: '5px', marginTop: '5px' }}
          />
        ))}
      </div>
    </div>
  );
}
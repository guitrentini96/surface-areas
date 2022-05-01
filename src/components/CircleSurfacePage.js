import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

export default function CircleSurfacePage() {
  const [state, setState] = React.useState({
    diameter: '',
    area: '',
    isInvalid: true,
    errorMessage: 'Enter a valid diameter',
  });

  const handleDiameterInput = (event) => {
    // first, get the inputs value and test to see if it's a valid number
    const value = event.target.value;
    const isNumber = /^\d*\.?\d*$/.test(value);
    // just procceed if the value is a valid number with no more than 4 algarisms or if the user deleted the value(value==='')
    if ((isNumber || value === '') && value.length <= 4) {
      // first check if the bigget is 0:
      const valid = /.*[1-9].*/.test(value);
      // if the value is 0, keep the error message
      setState({
        ...state,
        diameter: value,
        isInvalid: !valid,
      });
    }
  };

  const renderTextFields = () => {
    return (
      <TextField
        size="small"
        label={'Diameter'}
        variant="outlined"
        value={state.diameter}
        onChange={handleDiameterInput}
      />
    );
  };

  return (
    <Stack
      sx={{
        alignItems: 'center',
        height: '80%',
        position: 'relative',
      }}
    >
      <Typography variant="h4">Circle Surface</Typography>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/800px-Circle_-_black_simple.svg.png"
        alt="circle"
        width="80%"
      ></img>
      <Typography sx={{ position: 'absolute', top: '100px', left: '250px' }}>
        {state.diameter}
      </Typography>
      <Stack sx={{ height: '40%', justifyContent: 'space-around' }}>
        {renderTextFields()}
        <Button variant="contained" disabled={state.isInvalid}>
          {state.isInvalid ? state.errorMessage : 'submit'}
        </Button>
      </Stack>
    </Stack>
  );
}

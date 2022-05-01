import { Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

export default function TriangleSurfacePage() {
  const [state, setState] = React.useState({
    sides: ['', '', ''],
    area: '',
    isInvalid: true,
    errorMessage: 'Needs 3 values',
  });

  const handleSideInput = (event) => {
    // first, get the inputs value and test to see if it's a valid number
    const value = event.target.value;
    const isNumber = /^\d*\.?\d*$/.test(value);
    // we just procceed if the value is a valid number with no more than 4 algarisms or if the user deleted the value(value==='')
    if ((isNumber || value === '') && value.length <= 4) {
      // asign a index and a newSidesArray constants, which will be used to test the values
      const index = parseInt(event.target.name);
      const newSidesArray = state.sides;
      newSidesArray[index] = value;
      // first check if it has 3 values that are bigget than 0:
      const has3Values = newSidesArray.every((value) =>
        /.*[1-9].*/.test(value)
      );
      // if the values are invalid, keep the error message
      if (!has3Values) {
        setState({
          ...state,
          sides: newSidesArray,
          isInvalid: true,
          errorMessage: 'Needs 3 values',
        });
      } else {
        // it has 3 values. check if they make a triangle
        // first, get the perimeter
        const perimeter = newSidesArray.reduce(
          (prevValue, currentValue) =>
            parseFloat(prevValue) + parseFloat(currentValue),
          0
        );
        // then check if every value is smaller then half the perimeter
        const makesATriangle = newSidesArray.every(
          (value) => parseFloat(value) < perimeter / 2
        );
        // so if it doesn't make a triangle, update the error message:
        if (!makesATriangle) {
          setState({
            ...state,
            sides: newSidesArray,
            isInvalid: true,
            errorMessage: 'not a triangle',
          });
        }
        // and finally, if it makes a triangle, the submit button becomes active
        else {
          setState({
            ...state,
            sides: newSidesArray,
            isInvalid: false,
          });
        }
      }
    }
  };

  const renderTextFields = () => {
    return (
      <>
        {state.sides.map(function (value, index) {
          return (
            <TextField
              size="small"
              label={'Side '.concat(index + 1)}
              variant="outlined"
              value={value}
              key={index}
              name={index.toString()}
              onChange={handleSideInput}
            />
          );
        })}
      </>
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
      <Typography variant="h4">Triangle Surface</Typography>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/800px-Regular_triangle.svg.png"
        alt="triangle"
        width="80%"
      ></img>
      <Stack
        sx={{
          direction: 'row',
          position: 'absolute',
          top: '135px',
          left: '43px',
          width: '50px',
          alignItems: 'flex-end',
          // backgroundColor: 'blue',
        }}
      >
        <Typography>{state.sides[0]}</Typography>
      </Stack>
      <Stack
        sx={{
          direction: 'row',
          position: 'absolute',
          top: '135px',
          right: '45px',
          width: '50px',
          // backgroundColor: 'blue',
        }}
      >
        <Typography>{state.sides[1]}</Typography>
      </Stack>
      <Typography sx={{ position: 'absolute', top: '250px' }}>
        {state.sides[2]}
      </Typography>
      <Stack sx={{ height: '40%', justifyContent: 'space-between' }}>
        {renderTextFields()}
        <Button variant="contained" disabled={state.isInvalid}>
          {state.isInvalid ? state.errorMessage : 'submit'}
        </Button>
      </Stack>
    </Stack>
  );
}

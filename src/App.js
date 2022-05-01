import './App.css';
import React from 'react';
import GeneralContainer from './components/GeneralContainer';
import TriangleSurfacePage from './components/TriangleSurfacePage';

import { Stack } from '@mui/material';

function App() {
  return (
    <GeneralContainer>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '100%',
        }}
      >
        <TriangleSurfacePage />
      </Stack>
    </GeneralContainer>
  );
}

export default App;

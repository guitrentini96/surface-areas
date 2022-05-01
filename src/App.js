import './App.css';
import React from 'react';
import GeneralContainer from './components/GeneralContainer';
import TriangleSurfacePage from './components/TriangleSurfacePage';
import CircleSurfacePage from './components/CircleSurfacePage';

import { Stack, Typography } from '@mui/material';

function App() {
  const [state, setState] = React.useState({
    showTrianglePage: true,
    showCirclePage: false,
  });

  return (
    <GeneralContainer>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '100%',
        }}
      >
        {state.showTrianglePage ? (
          <TriangleSurfacePage display={state.showTrianglePage} />
        ) : state.showCirclePage ? (
          <CircleSurfacePage display={state.showCirclePage} />
        ) : (
          <Typography variant="h4">No page selected</Typography>
        )}
      </Stack>
    </GeneralContainer>
  );
}

export default App;

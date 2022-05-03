import './App.css';
import React from 'react';
import GeneralContainer from './components/GeneralContainer';
import TriangleSurfacePage from './components/TriangleSurfacePage';
import CircleSurfacePage from './components/CircleSurfacePage';
import PagesToggle from './components/PagesToggle';

import { Stack, Typography } from '@mui/material';

function App() {
  const [state, setState] = React.useState({
    page: 'triangle',
    showTrianglePage: true,
    showCirclePage: false,
  });

  const setNewPage = (page) => {
    console.log(`show ${page}`);
    if (page === 'triangle') {
      setState({
        ...state,
        page: 'triangle',
        showTrianglePage: true,
        showCirclePage: false,
      });
    } else if (page === 'circle') {
      setState({
        ...state,
        page: 'circle',
        showTrianglePage: false,
        showCirclePage: true,
      });
    }
  };

  return (
    <GeneralContainer>
      <Stack
        sx={{
          marginTop: '2%',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        {state.showTrianglePage ? (
          <TriangleSurfacePage display={state.showTrianglePage} />
        ) : state.showCirclePage ? (
          <CircleSurfacePage display={state.showCirclePage} />
        ) : (
          <Typography variant="h4">No page selected</Typography>
        )}

        <PagesToggle page={state.page} setPage={setNewPage} />
      </Stack>
    </GeneralContainer>
  );
}

export default App;

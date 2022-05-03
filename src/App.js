import './App.css';
import React from 'react';
import GeneralContainer from './components/GeneralContainer';
import TriangleSurfacePage from './components/TriangleSurfacePage';
import CircleSurfacePage from './components/CircleSurfacePage';
import PagesToggle from './components/PagesToggle';

import { Stack, Typography, Link } from '@mui/material';

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
      <Stack
        position="fixed"
        left="0"
        bottom="0"
        width="100vw"
        bgcolor="rgb(25,118,210)"
        direction="row"
        justifyContent="center"
      >
        <Typography color="white">
          {' '}
          built by{' '}
          <Link
            href="https://github.com/guitrentini96"
            underline="hover"
            target="_blank"
            rel="noopener"
            sx={{ color: 'white' }}
          >
            Guilherme Campara
          </Link>{' '}
          :)
        </Typography>
      </Stack>
    </GeneralContainer>
  );
}

export default App;

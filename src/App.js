import React from 'react';
import SearchBar from './components/SearchBar';
import { Container, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Fast Finder Search Bar
      </Typography>
      <SearchBar />
    </Container>
  );
}

export default App;

import React, { useState } from 'react';
import { countries } from '../data/countries';
import { Autocomplete, TextField, ListItem, Typography, Box } from '@mui/material';

const SearchBar = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (event, newValue) => {
    const filtered = countries.filter((country) =>
      country.country.toLowerCase().includes(newValue.toLowerCase()) ||
      country.capital.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
      <Autocomplete
        freeSolo
        options={countries.map((option) => option.country)}
        onInputChange={handleSearch}
        renderInput={(params) => (
          <TextField {...params} label="Search countries by name or capital" variant="outlined" />
        )}
      />
      {filteredResults.length > 0 && (
        <Box mt={2}>
          {filteredResults.map((result, index) => (
            <ListItem key={index}>
              <Typography>{result.country} - {result.capital}</Typography>
            </ListItem>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;

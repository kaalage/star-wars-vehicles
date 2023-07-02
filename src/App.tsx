import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import './App.css';
import logo from './images/logo.png';

interface Item {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      let allData: Item[] = [];

      // Initial request
      let response = await axios.get('https://swapi.dev/api/vehicles/');
      let apiData: { results: Item[]; next: string } = response.data;
      allData = allData.concat(apiData.results);

      // Loop through additional pages
      while (apiData.next) {
        response = await axios.get(apiData.next);
        apiData = response.data;
        allData = allData.concat(apiData.results);
      }

      setData(allData);
    };

    fetchData().catch(err => console.log(err));
  }, []);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedItem(event.target.value as string);
  };
  

  return (
    <div className="background-image">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <div className="center-container">
    {/* Render the select */}
    <FormControl variant="outlined">
      <InputLabel id="select-label">Select a vehicle</InputLabel>
      <Select
        labelId="select-label"
        id="select-vehicle"
        value={selectedItem}
        onChange={handleSelectChange}
        label="Select a vehicle"
        sx={{ minWidth: '400px', marginBottom: '15px' }}
      >
        {data.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <Box textAlign='center' sx={{ '& button': { m: 1 } }}>
      <div>
        <Button 
        variant="contained" 
        size="small" 
        color="primary"
        sx={{
        backgroundColor: '#000000', '&:hover': {backgroundColor: '#666'},
      }}>
          Checkout
        </Button>
      </div>
    </Box>
    </FormControl>
    </div>
    </header>
    </div>
  );
};

export default App;

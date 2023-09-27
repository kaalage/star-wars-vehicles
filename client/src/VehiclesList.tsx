import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import logo2 from './images/logo.png';
import { Box } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';

interface Item {
  id: number;
  name: string;
}

const VehiclesList: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/vehicles');
        const allData: Item[] = response.data;
        setData(allData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="background-image">
      <header className="header2">
        <img src={logo2} className="logo2" alt="logo2" /></header>
        <div className='vehicles-subtitle'>
          <p>Home / Vehicles</p>
        </div>
        <div className="center-container">
          {/* Render the image list */}
          <ImageList cols={4} gap={0} sx={{ width: 1000, height: 500 }} rowHeight={100}>
            {currentItems.map((item) => (
              <ImageListItem
                sx={{ width: 250 }}
                key={item.id}
                className={selectedItem === item.name ? 'selected' : ''}
                onClick={() => handleItemClick(item.name)}
              >
                <div className="image-container">
                <img
                  src={`/images/vehicles/${item.name.replace(/ /g, '')}.png`}
                  alt={item.name}
                  style={{ height: '15rem' }}
                />
                <div className="image-title">{item.name}</div>
              </div>
              </ImageListItem>
            ))}
          </ImageList>
          <Box textAlign='center' sx={{ '& button': { m: 1 } }}>
            {/* Pagination */}
            <div className='pagination-container'>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
            </div>
          </Box>
        </div>
    </div>
  );
};

export default VehiclesList;

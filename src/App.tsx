import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Item {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

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

  return (
    <div className="background-image">
      {/* Render the data */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default App;

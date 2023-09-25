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

const vehicleImageMapping: { [key: string]: string } = {
  'Sand Crawler': '/images/vehicles/Sandcrawler.png',
  'T-16 skyhopper': '/images/vehicles/T-16skyhopper.png',
  'X-34 landspeeder': '/images/vehicles/X-34landspeeder.png',
  'TIE/LN starfighter': '/images/vehicles/TIELNstarfighter.png',
  'Snowspeeder': '/images/vehicles/Snowspeeder.png',
  'TIE bomber': '/images/vehicles/TIEbomber.png',
  'AT-AT': '/images/vehicles/AT-AT.png',
  'AT-ST': '/images/vehicles/AT-ST.png',
  'Storm IV Twin-Pod cloud car': '/images/vehicles/StormIV-Twin-Pod-cloud-car.png',
  'Sail barge': '/images/vehicles/Sailbarge.png',
  'Bantha-II cargo skiff': '/images/vehicles/Bantha-IIcargoskiff.png',
  'TIE/IN interceptor': '/images/vehicles/TIEINinterceptor.png',
  'Imperial Speeder Bike': '/images/vehicles/ImperialSpeederBike.png',
  'Vulture Droid': '/images/vehicles/VultureDroid.png',
  'Multi-Troop Transport': '/images/vehicles/Multi-TroopTransport.png',
  'Armored Assault Tank': '/images/vehicles/ArmoredAssaultTank.png',
  'Single Trooper Aerial Platform': '/images/vehicles/SingleTrooperAerialPlatform.png',
  'C-9979 landing craft': '/images/vehicles/C-9979landingcraft.png',
  'Tribubble bongo': '/images/vehicles/Tribubblebongo.png',
  'Sith speeder': '/images/vehicles/Sithspeeder.png',
  'Zephyr-G swoop bike': '/images/vehicles/Zephyr-Gswoopbike.png',
  'Koro-2 Exodrive airspeeder': '/images/vehicles/Koro-2Exodriveairspeeder.png',
  'XJ-6 airspeeder': '/images/vehicles/XJ-6airspeeder.png',
  'LAAT/i': '/images/vehicles/LAATi.png',
  'LAAT/c': '/images/vehicles/LAATc.png',
  'AT-TE': '/images/vehicles/AT-TE.png',
  'SPHA': '/images/vehicles/SPHA.png',
  'Flitknot speeder': '/images/vehicles/FlitknotSpeeder.png',
  'Neimoidian shuttle': '/images/vehicles/NeimoidianShuttle.png',
  'Geonosian starfighter': '/images/vehicles/GeonosianStarfighter.png',
  'Tsmeu-6 personal wheel bike': '/images/vehicles/Tsmeu-6-personal-wheel-bike.png',
  'Emergency Firespeeder': '/images/vehicles/EmergencyFirespeeder.png',
  'Droid tri-fighter': '/images/vehicles/Droid-tri-fighter.png',
  'Oevvaor jet catamaran': '/images/vehicles/Oevvaor-jet-catamaran.png',
  'Raddaugh Gnasp fluttercraft': '/images/vehicles/Raddaugh-Gnasp-fluttercraft.png',
  'Clone turbo tank': '/images/vehicles/Clone-turbo-tank.png',
  'Corporate Alliance tank droid': '/images/vehicles/Corporate-Alliance-tank-droid.png',
  'Droid gunship': '/images/vehicles/Droid-gunship.png',
  'AT-RT': '/images/vehicles/AT-RT.png',
  
  // Add more entries for other vehicle names and their corresponding image file names
};

const VehiclesList: React.FC = () => {
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

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  console.log(vehicleImageMapping);


  return (
    <div className="background-image">
      <header className="header2">
        <img src={logo2} className="logo2" alt="logo2" />
        <div className="center-container">
          {/* Render the image list */}
          <ImageList cols={4} gap={10} sx={{ width: 1050 }} rowHeight={250}>
            {data.map((item) => (
              <ImageListItem
                sx={{ width: 250 }}
                key={item.id}
                className={selectedItem === item.name ? 'selected' : ''}
                onClick={() => handleItemClick(item.name)}
              >
                <img
                  src={vehicleImageMapping[item.name]}
                  alt={item.name}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Box textAlign='center' sx={{ '& button': { m: 1 } }}>
          </Box>
        </div>
      </header>
    </div>
  );
};

export default VehiclesList;
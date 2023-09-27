const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api/vehicles', async (req, res) => {
  try {
    let allData = [];
    let page = 1;

    while (true) {
      const apiUrl = `https://swapi.dev/api/vehicles/?page=${page}`;
      const response = await axios.get(apiUrl);
      const apiData = response.data;
      allData = allData.concat(apiData.results);

      if (!apiData.next) {
        break;
      }

      page++;
    }

    res.json(allData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

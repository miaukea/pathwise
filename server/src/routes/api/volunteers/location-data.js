require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.get('/api/tripadvisor/search', async (req, res) => {
    try {
        const location = req.query.location;
        if (!location) {return res.status(400).json({ error: "Location query parameter is required" })};
        
        const searchUrl = `https://api.content.tripadvisor.com/api/v1/location/search?query=${encodeURIComponent(location)}&key=${process.env.API_KEY}`;
       
        const searchResponse = await fetch(searchUrl);
        if (!searchResponse.ok) {
            throw new Error(`Search request failed with status ${searchResponse.status}`);
        }
        const searchData = await searchResponse.json();
        
        if (!searchData.data || searchData.data.length === 0) {
            return res.status(404).json({ error: "No locations found" });
        }

        const locationId = searchData.data[0].location_id;
       
        const detailsUrl = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details?key=${process.env.API_KEY}`;
       
        const detailsResponse = await fetch(detailsUrl);
        if (!detailsResponse.ok) {
            throw new Error(`Details request failed with status ${detailsResponse.status}`);
        }

        const detailsData = await detailsResponse.json();
        res.json(detailsData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch')
const {destination, destinationType} = require ('server\src\models')

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
        const destinationType = await DestinationType.upsert({
            type_name: detailsData.category?.name || "Unknown",
            type_parent_id: locationId,
        });

        const destination = await Destination.upsert({
            destination_name: detailsData.name || "Unknown",
            type_id: locationId,
            address1: detailsData.address_obj?.street1 || "Unknown",
            address2: detailsData.address_obj?.street2 || "Unknown",
            city: detailsData.address_obj?.city || "Unknown",
            state_province: detailsData.address_obj?.state || "Unknown",
            postal_code: detailsData.address_obj?.postalcode || "Unknown",
            country: detailsData.address_obj?.country || "Unknown",
        });
        const Destination_types = await Destination_types.upsert({
            type_name: detailsData.category?.name || "Unknown",
            type_parent_id: locationId,
        });

        res.json({
            message: "Data saved successfully",
            destinationType,
            destination,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
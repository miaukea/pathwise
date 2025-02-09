import express from 'express';

import { Trip } from '../../../models/model_index.js';

router.get('/', async (req, res) => {
  try{
    const trips = await Trip.findAll();
  res.json(trips);
  }catch{
    res.status(500).json({message: error.message})
  }
});


const router = express.Router();
//
// Read
  // GET /trips -Get all trips by trip_names

  // GET /trip/trip_id/destinations - Get all destination for a trip stop by trip_id

  // GET Trip_id/destination_id/type_id/ -Get a type of destination for a trip by trip_id, destionation_id and type_id


  // Trip destinations by trip_id through destination_ids  

  // Destination_typesNames by trip_id through destination_id then type_ids 
  // Get info by destination type name

// Create 
  //  POST /Trips -Trip_names, start_date, stop_dates ___
    // Optional
      // destionation names, 
      // assigned types, 
      // addresses
      // arrival and depture time(s), 
      // destination_type


// Update 
  // POST 
      // start_date, 
      // stop_dates ___
      // destionation names, 
      // assigned types, 
      // addresses
      // arrival and depture time(s), 
      // destination_type





export default router ;

import express from 'express';
const router  = express.Router();
import tripsRoutes from './trips_routes.js';
import { allTrips } from '../../../controllers/trip_controller/tripcontroller.js';

// Importing all DB routes 
import { getAllTrips } from './trips_routes.js';
import { getATripById } from './trips_routes.js';
import { getAllTripsTripStopDestinations } from './trips_routes.js';
import { getcreatetripNStopsNDestinations } from './trips_routes.js';


// Prefix all routes defined in destination.js,destination_type.js trip_stops.js, trips with `/books
router.use('/trips', tripsRoutes);

router.get('/', allTrips);


// GET /trips -Get all trips by trip_names
router.get('/',getAllTrips);
// Create a new Trip with associated Trip Stops and Destinations
router.get('/', getcreatetripNStopsNDestinations);

// Get a single Trip with nested relationships
router.get('/', getATripById );

// Get all Trips with associated Trip_stops and Destinations by trip_id
router.get('/', getAllTripsTripStopDestinations);


export default router

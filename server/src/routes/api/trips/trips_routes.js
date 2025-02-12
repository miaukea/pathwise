import { Router,request, response} from 'express';


// Imported all models
import { Trip } from '../../../models/model_index.js';
import { TripStop } from '../../../models/model_index.js';
import { Destination } from '../../../models/model_index.js';
import { DestinationType } from '../../../models/model_index.js';


// Read
  // GET /trips -Get all trips by trip_names
export const getAllTrips =async (response) => {
  try{
    const trips = await Trip.findAll();
  response.json(trips);
  }catch{
    response.status(500).json({message: error.message})
  }
};


  // GET /trip/trip_id/destinations - Get all Trips with associated Trip_stops and Destinations by trip_id

export const getAllTripsTripStopDestinations = async (response) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: TripStop,
          include: [
            {
              model: Destination,
              include: [ DestinationType ],
            },
          ],
        },
      ],
    });
    response.json(trips);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}

  // Get a single Trip with nested relationships

  export const getATripById = async (request, response) => {
  try {
    const trip = await Trip.findByPk(request.params.id, {
      include: [
        {
          model: TripStop,
          include: [
            {
              model: Destination,
              include: [DestinationType],
            },
          ],
        },
      ],
    });
    if (!trip) return response.status(404).json({ error: 'Trip not found' });
    response.json(trip);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// POST
  // Create a new Trip with associated Trip Stops and Destinations
export const getcreatetripNStopsNDestinations = async (request, response) => {
  try {
    const {tripData, tripStopData } = request.body;


    // Create the trip
const newTrip = await Trip.create(tripData);

    // Create trip stops associated with the trip
if (Array.isArray(tripStopData) && tripStopData.length > 0) {
  const tripStops = await Promise.all(
    tripStopData.map(async (tripStop) => {
      const createdTripStop = await TripStop.create({
        ...tripStop,
        trip_id: newTrip.id // Associate the trip stop with the newly created trip
      });

      // Create the destination and destination type for this trip stop
      if (tripStop.destination) {
        const createdDestination = await Destination.create({
          ...tripStop.destination,
          trip_stop_id: createdTripStop.id
        });

        if (tripStop.destination.destinationsType) {
          await Destination_type.create({
            ...tripStop.destination.destinationsType,
            destination_id: createdDestination.id
          });
        }
      }

      return createdTripStop;
    })
  );

    // Add trip stops to the response
  newTrip.dataValues.tripStops = tripStops;
}

response.status(201).json(newTrip);

  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};


// Add routes for Trip_stops, Destinations, and Destination_types as needed
const router = Router();


// GET /trips -Get all trips by trip_names
router.get('/',getAllTrips);

// Create a new Trip with associated Trip Stops and Destinations
router.get('/', getcreatetripNStopsNDestinations);

// Get a single Trip with nested relationships
router.get('/', getATripById );

// Get all Trips with associated Trip_stops and Destinations by trip_id
router.get('/', getAllTripsTripStopDestinations);

export default router ;

import { Router } from 'express';

// Imported all models
import { Trip } from '../../../models/model_index.js';
import { TripStop } from '../../../models/model_index.js';
import { Destination } from '../../../models/model_index.js';
import { DestinationType } from '../../../models/model_index.js';

// Read
// GET /trips - Get all trips by trip_names
export const getAllTrips = async (req, res) => {  // Fixed parameter names
  try {
    const trips = await Trip.findAll();
    console.log(trips);
    res.status(200).json(trips);  // Corrected response object usage
  } catch (error) {  // Fixed error handling
    res.status(500).json({ message: error.message });
  }
};


// GET /trip/trip_id/destinations - Get all Trips with associated Trip_stops and Destinations by trip_id
export const getAllTripsTripStopDestinations = async (req, res) => {
  try {
    const trips = await Trip.findAll({
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
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Trip with nested relationships
export const getATripById = async (req, res) => {
  try {
    const trip = await Trip.findByPk(req.params.id, {
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
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST - Create a new Trip with associated Trip Stops and Destinations
export const createtripNStopsNDestinations = async (req, res) => {
  try {
    const { tripData, tripStopData } = req.body;

    // Create the trip
    const newTrip = await Trip.create(tripData);

    // Create trip stops associated with the trip
    if (Array.isArray(tripStopData) && tripStopData.length > 0) {
      const tripStops = await Promise.all(
        tripStopData.map(async (tripStop) => {
          const createdTripStop = await TripStop.create({
            ...tripStop,
            trip_id: newTrip.id, // Associate the trip stop with the newly created trip
          });

          // Create the destination and destination type for this trip stop
          if (tripStop.destination) {
            const createdDestination = await Destination.create({
              ...tripStop.destination,
              trip_stop_id: createdTripStop.id,
            });

            if (tripStop.destination.destinationType) {
              await DestinationType.create({
                ...tripStop.destination.destinationType,
                destination_id: createdDestination.id,
              });
            }
          }

          return createdTripStop;
        })
      );

      // Add trip stops to the response
      newTrip.dataValues.tripStops = tripStops;
    }

    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add routes for Trip_stops, Destinations, and Destination_types as needed
const router = Router();

// GET /trips - Get all trips by trip_names
router.get('/', getAllTrips);

// Create a new Trip with associated Trip Stops and Destinations
router.post('/newtrip', createtripNStopsNDestinations);

// Get a single Trip with nested relationships
router.get('/:id', getATripById);

// Get all Trips with associated Trip_stops and Destinations by trip_id
router.get('/alltripinfo', getAllTripsTripStopDestinations);

export { router as tripRoutes };

import sequelize from '../config/connection.js';
import { TripFactory } from './Trips.js';

const Trip = TripFactory(sequelize);
console.log(Trip === sequelize.models.Trip);

export { Trip };

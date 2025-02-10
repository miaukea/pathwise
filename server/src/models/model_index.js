import sequelize from '../config/connection.js';

// import models
import { TripFactory } from './trips.js';
import { TripripStopsFactory } from './trip_stops.js';
import { DestinationFactory } from './destination.js';
import { DestinationTypeFactory } from './destination_type.js';


const Trip = TripFactory(sequelize);
const TripStop = TripripStopsFactory(sequelize);
const Destination = DestinationFactory(sequelize);
const DestinationType = DestinationTypeFactory(sequelize);

console.log(Trip === sequelize.models.Trip);
console.log(TripStop === sequelize.models.TripStop);
console.log(Destination === sequelize.models.Destination);
console.log(DestinationType === sequelize.models.DestinationType);


// One to One Relations:


// One-to-Many Relationship: 
Trip.hasMany(TripStop, { foreignKey: 'trip_Id' });
TripStop.belongsTo(Trip, { foreignKey: 'trip_Id' });

TripStop.hasMany(Destination,{foreignKey: 'destination_id'});
Destination.belongsTo(TripStop, {foreignKey: 'destination_id'});

Destination.hasMany(DestinationType, {foreignKey: 'type_id'});
DestinationType.belongsTo(Destination, {foreignKey: 'type_id'});

// Many to Many Relationships 

export { Trip, TripStop, Destination, DestinationType };














import sequelize from '../config/connection.js';

// import models
import { TripFactory } from './trips.js';
import { TripripStopsFactory } from './trip_stops.js';
import { DestinationFactory } from './destination.js';
import { DestinationTypeFactory } from './destinations_type.js';


const Trip = TripFactory(sequelize);
const TripStop = TripripStopsFactory(sequelize);
const Destination = DestinationFactory(sequelize);
const DestinationType = DestinationTypeFactory(sequelize);

console.log(Trip === sequelize.models.Trip);
console.log(TripStop === sequelize.models.TripStop);
console.log(Destination === sequelize.models.Destination);
console.log(DestinationType === sequelize.models.DestinationType);




// 1. Trip and Trip_stop association
Trip.hasMany(TripStop, { foreignKey: 'trip_id' });
TripStop.belongsTo(Trip, { foreignKey: 'trip_id' });

// 2. Trip_stop and Destination association (One-to-One)
TripStop.hasOne(Destination, { foreignKey: 'destination_id' });
Destination.belongsTo(TripStop, { foreignKey: 'destination_id' });

// 3. Destination and DestinationType association (Many-to-One)
Destination.belongsTo(DestinationType, { foreignKey: 'type_id' });
DestinationType.hasMany(Destination, { foreignKey: 'type_id' });

// 4. Self-referencing association for hierarchical Destination Types
DestinationType.hasMany(DestinationType, {
  foreignKey: "type_parent_id",
  as: "subTypes", // Child types
});

DestinationType.belongsTo(DestinationType, {
  foreignKey: "type_parent_id",
  as: "parentType", // Parent type
});



// 5. Many-to-Many Relationship (Trip ↔ DestinationType via Destination)
Trip.belongsToMany(DestinationType, {
  through: Destination,
  foreignKey: 'trip_id',
  otherKey: 'type_id', // Reference type_id (not destination_id)
});

DestinationType.belongsToMany(Trip, {
  through: Destination,
  foreignKey: 'type_id',
  otherKey: 'trip_id',
});

export { Trip, TripStop, Destination, DestinationType };














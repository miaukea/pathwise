import sequelize from '../config/connection.js';
import { VolunteerFactory } from './Trips.js';

const Volunteer = VolunteerFactory(sequelize);
console.log(Volunteer === sequelize.models.Volunteer);

export { Volunteer };

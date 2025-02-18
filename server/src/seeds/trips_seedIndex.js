import sequelize from './config/connection.js';


// Imported all seeds
import { tripSeeds } from './tripSeeds.js';
import { tripStopSeeds } from './tripStopSeeds.js';
import { destinationSeeds } from './destinationSeeds.js';
import { destinationTypeSeeds } from './destinationtypeSeeds.js';
 

const seedAll = async () => {
  
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    // seeding the trips table 
    await tripSeeds();
    console.log('\n----- TRIPS TABLE SEEDED -----\n');

    // seeding the trip stops table 
    await tripStopSeeds();
    console.log('\n----- TRIPS STOP TABLE SEEDED -----\n');

    // seeding the destination table 
    await destinationSeeds();
    console.log('\n----- DESTINATION TABLE SEEDED -----\n');

    //  seeding the destination type table 

    await destinationTypeSeeds();
    console.log('\n----- DESTINATION TYPE TABLE SEEDED -----\n');


    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
import { Sequelize, DataTypes, Model } from 'sequelize';

class TripStops extends Model {}

export function tripstopsfactory(sequelize) {
  TripStops.init({
    trip_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destination_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    {
   departuretime: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'trips',
    sequelize,
  });

  return TripStops;
}

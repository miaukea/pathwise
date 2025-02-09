import { Sequelize, DataTypes, Model } from 'sequelize';

class TripStop extends Model {}

export function TripripStopsFactory(sequelize) {
  TripStop.init({
    trip_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arrivaltime:{ 
      type: DataTypes.TIME,
      allownull:false
    },
   departuretime: {
      type: DataTypes.TIME,
      allowNull: false,
    }
  }, {
    tableName: 'trips_stop',
    sequelize,
  });

  return TripStop;
}

import { Sequelize, DataTypes, Model } from 'sequelize';

class TripStop extends Model {}

export function TripripStopsFactory(sequelize) {
  TripStop.init({
    trip_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stop_name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arrivaltime:{ 
      type: DataTypes.TIME,
      allownull:true
    },
   departuretime: {
      type: DataTypes.TIME,
      allowNull: true,
    }
  }, {
    tableName: 'trips_stop',
    sequelize,
  });

  return TripStop;
}

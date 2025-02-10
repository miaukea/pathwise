import { Sequelize, DataTypes, Model } from 'sequelize';



class Trip extends Model {}

export function TripFactory(sequelize) {
  Trip.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startdate: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    enddate: {
      type: DataTypes.TIME,
      allowNull: true,
    }
  }, {
    tableName: 'trips',
    sequelize,
  });

  return Trip;
}

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
      type: DataTypes.STRING,
      allowNull: false,
    },
    enddate: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'trips',
    sequelize,
  });

  return Trip;
}

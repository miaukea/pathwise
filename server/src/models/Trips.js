import { Sequelize, DataTypes, Model } from 'sequelize';



class Trip extends Model {}

export function TripFactory(sequelize) {
  Trip.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tripname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, {
    tableName: 'trips',
    sequelize,
  });

  return Trip;
}

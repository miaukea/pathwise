import { Sequelize, DataTypes, Model } from 'sequelize';

class Destination extends Model {}

export function DestinationFactory(sequelize) {
  Destination.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    destination_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
     city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state_province: {
      type: DataTypes.STRING,
      allowNull: true,
    }, postal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    }, country: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    tableName: 'destinations',
    sequelize,
  });

  return Destination;
}

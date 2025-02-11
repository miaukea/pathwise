import { Sequelize, DataTypes, Model } from 'sequelize';

class Destination extends Model {}

export function DestinationFactory(sequelize) {
  Destination.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destination_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_province: {
      type: DataTypes.STRING,
      allowNull: false,
    }, postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   country: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'destinations',
    sequelize,
  });

  return Destination;
}

import { Sequelize, DataTypes, Model } from 'sequelize';

class DestinationType extends Model {}

export function DestinationTypeFactory(sequelize) {
  DestinationType.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_parent_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'destination_types',
    sequelize,
  });

  return DestinationType;
}

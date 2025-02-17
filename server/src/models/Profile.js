import { DataTypes, Model } from 'sequelize';

class Profile extends Model {}

function ProfileFactory(sequelize) {
  Profile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter your password',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'profile',
    }
  );

  return Profile;
}

export { Profile, ProfileFactory };
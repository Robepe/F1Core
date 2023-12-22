const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Drivers = sequelize.define('drivers', {
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    driverRef: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Drivers.associate = (models) => {
    Drivers.hasMany(models.DriverStandings, {
      foreignKey: 'driverId',
      targetKey: 'driverId'
    });
  };

  return Drivers;
};

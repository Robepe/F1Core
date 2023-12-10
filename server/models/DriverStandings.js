const { DataTypes } = require('sequelize');
const { Races, Drivers } = require('./');

module.exports = (sequelize) => {
  const DriverStandings = sequelize.define('DriverStandings', {
    driverStandingsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionText: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  DriverStandings.associate = (models) => {
    DriverStandings.belongsTo(models.Races, {
      foreignKey: 'raceId',
      targetKey: 'raceId'
    });

    DriverStandings.belongsTo(models.Drivers, {
      foreignKey: 'driverId',
      targetKey: 'driverId'
    });
  };

  return DriverStandings;
};

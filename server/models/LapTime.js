const { DataTypes } = require('sequelize');
const { Races, Drivers } = require('./');

module.exports = (sequelize) => {
  const LapTimes = sequelize.define('lapTimes', {
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  LapTimes.associate = (models) => {
    LapTimes.belongsTo(Races, {
      foreignKey: 'circuitId',
      targetKey: 'circuitId'
    });
    LapTimes.belongsTo(Drivers, {
      foreignKey: 'driverId',
      targetKey: 'driverId'
    });
  };

  return LapTimes;
};

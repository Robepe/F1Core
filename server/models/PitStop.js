const { DataTypes } = require('sequelize');
const { Races, Drivers } = require('./');

module.exports = (sequelize) => {
  const PitStop = sequelize.define('PitStop', {
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
    stop: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    lap: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  PitStop.associate = (models) => {
    PitStop.belongsTo(Races, {
      foreignKey: 'circuitId',
      targetKey: 'circuitId'
    });
    PitStop.belongsTo(Drivers, {
      foreignKey: 'driverId',
      targetKey: 'driverId'
    });
    PitStop.belongsTo(Constructors, {
      foreignKey: 'constructorId',
      targetKey: 'constructorId'
    });
  };

  return PitStop;
};

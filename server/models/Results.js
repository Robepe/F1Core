const { DataTypes } = require('sequelize');
const { Races, Drivers, Constructors } = require('./');

module.exports = (sequelize) => {
  const Results = sequelize.define('results', {
    resultId: {
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
    constructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    grid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    positionOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    laps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fastestLap: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fastestLapTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fastestLapSpeed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Results.associate = (models) => {
    Results.belongsTo(Races, {
      foreignKey: 'circuitId',
      targetKey: 'circuitId'
    });
    Results.belongsTo(Drivers, {
      foreignKey: 'driverId',
      targetKey: 'driverId'
    });
    Results.belongsTo(Constructors, {
      foreignKey: 'constructorId',
      targetKey: 'constructorId'
    });
  };

  return Results;
};

const { DataTypes } = require('sequelize');

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
    // Asociaciones aquí
  };

  return PitStop;
};

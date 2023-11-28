const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Qualifying = sequelize.define('Qualifying', {
    qualifyId: {
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
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    q1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    q2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    q3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Qualifying.associate = (models) => {
    // Asociaciones aquí
  };

  return Qualifying;
};

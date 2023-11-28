const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Races = sequelize.define('Races', {
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    round: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    circuitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    fp1_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fp1_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    // Añadir el resto de los campos según sea necesario
  });

  Races.associate = (models) => {
    // Asociaciones aquí
  };

  return Races;
};

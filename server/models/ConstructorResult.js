const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ConstructorResult = sequelize.define('ConstructorResult', {
    constructorResultsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    points: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  ConstructorResult.associate = (models) => {
    // Asociaciones aquí
  };

  return ConstructorResult;
};

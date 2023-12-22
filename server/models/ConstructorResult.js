const { DataTypes } = require('sequelize');
const { Constructors, Races } = require('./');

module.exports = (sequelize) => {
  const ConstructorResult = sequelize.define('constructorResult', {
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
    ConstructorResult.belongsTo(Races, {
      foreignKey: 'circuitId',
      targetKey: 'circuitId'
    });
    ConstructorResult.belongsTo(Constructors, {
      foreignKey: 'driverId',
      targetKey: 'driverId'
    });
  };

  return ConstructorResult;
};

const { DataTypes } = require('sequelize');
//const { Constructors, Races } = require('./models');

module.exports = (sequelize) => {
  const ConstructorStandings = sequelize.define('ConstructorStandings', {
    constructorStandingsId: {
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

  ConstructorStandings.associate = (models) => {
    ConstructorStandings.belongsTo(models.Races, {
      foreignKey: 'raceId',
      targetKey: 'raceId'
    });
  
    ConstructorStandings.belongsTo(models.Constructors, {
      foreignKey: 'constructorId',
      targetKey: 'constructorId'
    });
  };

  return ConstructorStandings;
};

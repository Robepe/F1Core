const { DataTypes } = require('sequelize');
const { Seasons, Circuits } = require('./');

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
    fp2_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fp2_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    fp3_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fp3_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    quali_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    quali_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    sprint_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    sprint_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  });

  Races.associate = (models) => {
    Races.belongsTo(Seasons, {
      foreignKey: 'year', // Nombre de la columna en la tabla races
      targetKey: 'year'  // Nombre de la columna en la tabla seasons
      //as: 'season',   // Alias opcional para la relación
    });

    Races.belongsTo(Circuits, {
      foreignKey: 'circuitId',
      targetKey: 'circuitId'
    });
  };

  return Races;
};

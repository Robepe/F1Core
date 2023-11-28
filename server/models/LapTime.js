const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LapTimes = sequelize.define('LapTimes', {
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
    LapTimes.belongsTo(models.Races, {
      foreignKey: 'raceId',
    });
  
    LapTimes.belongsTo(models.Drivers, {
      foreignKey: 'driverId',
    });
  };
  

  return LapTimes;
};

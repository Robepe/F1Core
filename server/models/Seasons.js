const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Seasons = sequelize.define('Seasons', {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  });

  return Seasons;
};

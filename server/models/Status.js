const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Status = sequelize.define('Status', {
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Status.associate = (models) => {
    // Asociaciones aquí
  };

  return Status;
};

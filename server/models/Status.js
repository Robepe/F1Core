const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Status = sequelize.define('status', {
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
  }, {
    tableName: 'status'
  });

  return Status;
};

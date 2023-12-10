const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Constructors = sequelize.define('Constructors', {
    constructorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    constructorRef: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Constructors.associate = (models) => {
    Constructors.hasMany(models.ConstructorStandings, {
      foreignKey: 'constructorId',
      targetKey: 'constructorId'
    });
  };

  return Constructors;
};

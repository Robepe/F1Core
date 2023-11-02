'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipo = sequelize.define('Equipo', {
    name: DataTypes.STRING,
    driver1_id: DataTypes.INTEGER,
    driver2_id: DataTypes.INTEGER,
    firstSeason: DataTypes.DATE,
    totalPoints: DataTypes.INTEGER,
    disputedRaces: DataTypes.INTEGER,
    victories: DataTypes.INTEGER,
    podiums: DataTypes.INTEGER,
    championshipsWon: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Equipo.associate = function (models) {
    Equipo.hasMany(models.ParticipacionTemporada, {
      foreignKey: 'equipoID',
      as: 'participaciones'
    });
    Equipo.belongsTo(models.Piloto, {
      foreignKey: 'driver1_id',
      as: 'piloto1'
    });
    Equipo.belongsTo(models.Piloto, {
      foreignKey: 'driver2_id',
      as: 'piloto2'
    });
  };
  return Equipo;
};

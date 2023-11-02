'use strict';
module.exports = (sequelize, DataTypes) => {
    const Piloto = sequelize.define('Piloto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        team_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        birthday: {
            type: DataTypes.DATE
        },
        driverNumber: {
            type: DataTypes.INTEGER
        },
        disputedRaces: {
            type: DataTypes.INTEGER
        },
        podiums: {
            type: DataTypes.INTEGER
        },
        victories: {
            type: DataTypes.INTEGER
        },
        championshipsWon: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    }, {});
    Piloto.associate = function (models) {
        Piloto.belongsTo(models.Equipo, {
            foreignKey: 'team_id',
            as: 'equipo'
        });
        Piloto.hasMany(models.ParticipacionTemporada, {
            foreignKey: 'driver_id',
            as: 'participaciones'
        });
    };
    return Piloto;
};

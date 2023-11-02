'use strict';
module.exports = (sequelize, DataTypes) => {
    const Temporada = sequelize.define('Temporada', {
        year: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {});
    Temporada.associate = function (models) {
        Temporada.hasMany(models.ParticipacionTemporada, {
            foreignKey: 'temporadaID',
            as: 'participaciones'
        });
    };
    return Temporada;
};

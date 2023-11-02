'use strict';
module.exports = (sequelize, DataTypes) => {
    const ParticipacionTemporada = sequelize.define('ParticipacionTemporada', {
        temporadaID: DataTypes.INTEGER,
        pilotoID: DataTypes.INTEGER,
        equipoID: DataTypes.INTEGER
    }, {});
    return ParticipacionTemporada;
};

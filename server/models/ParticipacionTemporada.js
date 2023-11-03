'use strict';
module.exports = (sequelize, DataTypes) => {
	const ParticipacionTemporada = sequelize.define('ParticipacionTemporada', {
		id: {
			types: DataTypes.INTEGER,
			primaryKey: true
		},
		temporadaID: {
			types: DataTypes.INTEGER,
			foreignKey: true
		},
		pilotoID: {
			types: DataTypes.INTEGER,
			foreignKey: true
		},
		equipoID: {
			types: DataTypes.INTEGER,
			foreignKey: true
		}
	}, {});
	Temporada.associate = function(models) {
		// Definir asociaciones
	}
	return ParticipacionTemporada;
};

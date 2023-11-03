'use strict';
module.exports = (sequelize, DataTypes) => {
	const Temporada = sequelize.define('Temporada', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		year: {
			type: DataTypes.INTEGER // Verificar si hacer uso de Date (solo año)
		},
		driver_champion: {
			type: DataTypes.INTEGER, // referencia al ID de Piloto
			foreignKey: true
		},
		driver_champion: {
			type: DataTypes.INTEGER, // referencia al ID de Equipo
			foreignKey: true
		}
	}, {});
	Temporada.associate = function (models) {
		// Comprobar asociaciones
		Temporada.hasMany(models.ParticipacionTemporada, {
			foreignKey: 'temporadaID',
			as: 'participaciones'
		});
	};
	return Temporada;
};

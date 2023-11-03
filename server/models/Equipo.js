'use strict';
module.exports = (sequelize, DataTypes) => {
	const Equipo = sequelize.define('Equipo', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING
		},
		driver1_id: {
			type: DataTypes.INTEGER
		},
		driver2_id: {
			type: DataTypes.INTEGER
		},
		firstSeason: {
			type: DataTypes.DATE
		},
		totalPoints: {
			type: DataTypes.INTEGER,
		},
		disputedRaces: {
			type: DataTypes.INTEGER,
		},
		victories: {
			type: DataTypes.INTEGER,
		},
		podiums: {
			type: DataTypes.INTEGER,
		},
		championshipsWon: {
			type: DataTypes.INTEGER,
		},
		description: {
			type: DataTypes.STRING,
		}
	}, {});
	Equipo.associate = function (models) {
		// Comprobar asociaciones
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

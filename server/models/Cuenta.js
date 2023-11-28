'use strict';
module.exports = (sequelize, DataTypes) => {
	const Cuenta = sequelize.define('Cuenta', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING,
		},
		admin: {
			type: DataTypes.BOOLEAN
		},
		fav_driver: {
			type: DataTypes.INTEGER
		},
		fav_team: {
			type: DataTypes.INTEGER
		}
	}, {});
	Cuenta.associate = function (models) {
		// definir asociaciones
		// Equipo.hasMany(models.ParticipacionTemporada, {
		// 	foreignKey: 'equipoID',
		// 	as: 'participaciones'
		// });
		// Equipo.belongsTo(models.Piloto, {
		// 	foreignKey: 'driver1_id',
		// 	as: 'piloto1'
		// });
		// Equipo.belongsTo(models.Piloto, {
		// 	foreignKey: 'driver2_id',
		// 	as: 'piloto2'
		// });
	};
	return Cuenta;
};

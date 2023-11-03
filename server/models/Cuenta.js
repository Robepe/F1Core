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
	};
	return Cuenta;
};

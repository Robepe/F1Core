const { Constructors, Drivers } = require('./models');

module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define('Account', {
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
	Account.associate = function (models) {
		Account.hasOne(Drivers, {
			foreignKey: 'circuitId',
			targetKey: 'circuitId'
		  });
		  Account.hasOne(Constructors, {
			foreignKey: 'driverId',
			targetKey: 'driverId'
		  });
	};
	return Account;
};

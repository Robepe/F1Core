const { Constructors, Drivers } = require('./');

module.exports = (sequelize, DataTypes) => {
	const Account = sequelize.define('accounts', {
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
		Account.hasOne(models.Drivers, {
			foreignKey: 'fav_driver',
			targetKey: 'driverId'
		});
		Account.hasOne(Constructors, {
			foreignKey: 'fav_team',
			targetKey: 'constructorId'
		});
	};
	return Account;
};

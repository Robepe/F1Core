const { Constructors, Drivers } = require('./');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('users', {
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
	User.associate = function (models) {
		User.hasOne(models.Drivers, {
			foreignKey: 'fav_driver',
			targetKey: 'driverId'
		});
		User.hasOne(Constructors, {
			foreignKey: 'fav_team',
			targetKey: 'constructorId'
		});
	};
	return User;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cuenta = sequelize.define('Cuenta', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
        fav_driver: DataTypes.INTEGER,
        fav_team: DataTypes.INTEGER
    }, {});
    Cuenta.associate = function (models) {
        // Define las asociaciones aquí, si es necesario.
    };
    return Cuenta;
};

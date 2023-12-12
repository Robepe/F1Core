const { DataTypes } = require('sequelize');
const { Races, Drivers, Constructors, Status } = require('./');

module.exports = (sequelize) => {
    const SprintResults = sequelize.define('SprintResults', {
        sprintResultId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        raceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        constructorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        grid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
        },
        positionText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        positionOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        points: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        laps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
        },
        milliseconds: {
            type: DataTypes.INTEGER,
        },
        fastestLap: {
            type: DataTypes.INTEGER,
        },
        fastestLapTime: {
            type: DataTypes.STRING,
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    SprintResults.associate = (models) => {
        SprintResults.belongsTo(models.Races, {
            foreignKey: 'raceId',
            targetKey: 'raceId'
        });
        SprintResults.belongsTo(models.Drivers, {
            foreignKey: 'driverId',
            targetKey: 'driverId'
        });
        SprintResults.belongsTo(models.Constructors, {
            foreignKey: 'constructorId',
            targetKey: 'constructorId'
        });
    };

    return SprintResults;
};

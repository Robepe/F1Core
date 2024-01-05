const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.DB_USER, dbConfig.DB_PASSWORD, {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,

    define: {
        timestamps: false
    },

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.accounts = require("./Account.js")(sequelize, Sequelize);
db.users = require("./User.js")(sequelize, Sequelize);
db.circuits = require("./Circuits.js")(sequelize, Sequelize);
db.constructorResults = require("./ConstructorResult.js")(sequelize, Sequelize);
db.constructorStandings = require("./ConstructorStanding.js")(sequelize, Sequelize);
db.constructors = require("./Constructors.js")(sequelize, Sequelize);
db.driverStandings = require("./DriverStandings.js")(sequelize, Sequelize);
db.drivers = require("./Drivers.js")(sequelize, Sequelize);
db.lapTimes = require("./LapTime.js")(sequelize, Sequelize);
db.pitStops = require("./PitStop.js")(sequelize, Sequelize);
db.qualifying = require("./Qualifying.js")(sequelize, Sequelize);
db.races = require("./Races.js")(sequelize, Sequelize);
db.results = require("./Results.js")(sequelize, Sequelize);
db.seasons = require("./Seasons.js")(sequelize, Sequelize);
db.status = require("./Status.js")(sequelize, Sequelize);
db.sprintResults = require("./SprintResults.js")(sequelize, Sequelize);

module.exports = db;
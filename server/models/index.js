const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

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

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
// db.accounts = require("./accounts.model.js")(sequelize, Sequelize);
// db.circuits = require("./circuits.model.js")(sequelize, Sequelize);
// db.constructorResults = require("./constructorResults.model.js")(sequelize, Sequelize);
// db.constructorStandings = require("./constructorStandings.model.js")(sequelize, Sequelize);
// db.constructors = require("./constructors.model.js")(sequelize, Sequelize);
// db.driverStandings = require("./driverStandings.model.js")(sequelize, Sequelize);
// db.drivers = require("./drivers.model.js")(sequelize, Sequelize);
// db.lapTimes = require("./lapTimes.model.js")(sequelize, Sequelize);
// db.pitStops = require("./pitStops.model.js")(sequelize, Sequelize);
// db.qualifying = require("./qualifying.model.js")(sequelize, Sequelize);
// db.races = require("./races.model.js")(sequelize, Sequelize);
// db.results = require("./results.model.js")(sequelize, Sequelize);
// db.seasons = require("./seasons.model.js")(sequelize, Sequelize);
// db.sprintResults = require("./sprintResults.model.js")(sequelize, Sequelize);
// db.status = require("./status.model.js")(sequelize, Sequelize);

module.exports = db;
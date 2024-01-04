const express = require('express');
const cors = require('cors')

const app = express();

var corsOption = {
  origin: "http://localhost:4202"
};

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Configuración CORS
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// routes
require("./routes/account.routes")(app);
require("./routes/circuit.routes")(app);
require("./routes/constructorResults.routes")(app);
require("./routes/constructorStandings.routes")(app);
require("./routes/constructor.routes")(app);
require("./routes/driverStandings.routes")(app);
require("./routes/driver.routes")(app);
// require("./routes/laptimes.routes")(app);
// require("./routes/pitstops.routes")(app);
require("./routes/qualifyings.routes")(app);
require("./routes/races.routes")(app);
require("./routes/results.routes")(app);
require("./routes/seasons.routes")(app);
require("./routes/sprintResults.routes")(app);
require("./routes/status.routes")(app);
// require('./routes/auth.routes')(app);
// require('./routes/account2.routes')(app);

// set port, listen for requests
const DB_PORT = process.env.DB_PORT || 9000;
app.listen(DB_PORT, () => {
  console.log(`Server started on port ${DB_PORT}`);
});

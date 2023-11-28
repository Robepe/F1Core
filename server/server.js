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

// const db = require("./models");
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);    --> EJECUTAR EN F1Core.db cuando sea disponible
//   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a F1Core" }) // Ruta de prueba (OK)
});

// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

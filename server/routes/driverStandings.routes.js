module.exports = app => {
    const driverStandings = require("../controllers/driverStandings.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", driverStandings.create);

    // Retrieve all Constructors
    router.get("/", driverStandings.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", driverStandings.findOne);

    // Update a Constructor with id
    router.put("/:id", driverStandings.update);

    // Delete a Constructor with id
    router.delete("/:id", driverStandings.delete);

    // Delete all Accounts
    router.delete("/", driverStandings.deleteAll);

    app.use('/api/driverStandings', router);
};
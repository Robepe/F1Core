module.exports = app => {
    const circuits = require("../controllers/circuit.controller.js");

    var router = require("express").Router();

    // Create a new Circuit
    router.post("/", circuits.create);

    // Retrieve all Circuits
    router.get("/", circuits.findAll);

    // Retrieve a single Circuit with id
    router.get("/:id", circuits.findOne);

    // Update a Circuit with id
    router.put("/:id", circuits.update);

    // Delete a Circuit with id
    router.delete("/:id", circuits.delete);

    // Delete all Accounts
    router.delete("/", circuits.deleteAll);

    app.use('/api/circuits', router);
};
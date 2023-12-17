module.exports = app => {
    const constructorStandings = require("../controllers/constructorStandings.controller.js");

    var router = require("express").Router();

    // Create a new Circuit
    router.post("/", constructorStandings.create);

    // Retrieve all Circuits
    router.get("/", constructorStandings.findAll);

    // Retrieve a single Circuit with id
    router.get("/:id", constructorStandings.findOne);

    // Update a Circuit with id
    router.put("/:id", constructorStandings.update);

    // Delete a Circuit with id
    router.delete("/:id", constructorStandings.delete);

    // Delete all Accounts
    router.delete("/", constructorStandings.deleteAll);

    app.use('/api/constructorStandings', router);
};
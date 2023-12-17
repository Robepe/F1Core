module.exports = app => {
    const constructorResults = require("../controllers/constructorResults.controller.js");

    var router = require("express").Router();

    // Create a new Circuit
    router.post("/", constructorResults.create);

    // Retrieve all Circuits
    router.get("/", constructorResults.findAll);

    // Retrieve a single Circuit with id
    router.get("/:id", constructorResults.findOne);

    // Update a Circuit with id
    router.put("/:id", constructorResults.update);

    // Delete a Circuit with id
    router.delete("/:id", constructorResults.delete);

    // Delete all Accounts
    router.delete("/", constructorResults.deleteAll);

    app.use('/api/constructorResults', router);
};
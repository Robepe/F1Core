module.exports = app => {
    const races = require("../controllers/races.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", races.create);

    // Retrieve all Constructors
    router.get("/", races.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", races.findOne);

    // Update a Constructor with id
    router.put("/:id", races.update);

    // Delete a Constructor with id
    router.delete("/:id", races.delete);

    // Delete all Accounts
    router.delete("/", races.deleteAll);

    app.use('/api/races', router);
};
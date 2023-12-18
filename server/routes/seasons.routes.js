module.exports = app => {
    const seasons = require("../controllers/seasons.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", seasons.create);

    // Retrieve all Constructors
    router.get("/", seasons.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", seasons.findOne);

    // Update a Constructor with id
    router.put("/:id", seasons.update);

    // Delete a Constructor with id
    router.delete("/:id", seasons.delete);

    // Delete all Accounts
    router.delete("/", seasons.deleteAll);

    app.use('/api/seasons', router);
};
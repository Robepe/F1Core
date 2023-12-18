module.exports = app => {
    const qualifyings = require("../controllers/qualifyings.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", qualifyings.create);

    // Retrieve all Constructors
    router.get("/", qualifyings.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", qualifyings.findOne);

    // Update a Constructor with id
    router.put("/:id", qualifyings.update);

    // Delete a Constructor with id
    router.delete("/:id", qualifyings.delete);

    // Delete all Accounts
    router.delete("/", qualifyings.deleteAll);

    app.use('/api/qualifyings', router);
};
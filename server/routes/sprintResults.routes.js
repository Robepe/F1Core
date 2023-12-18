module.exports = app => {
    const sprintResults = require("../controllers/sprintResults.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", sprintResults.create);

    // Retrieve all Constructors
    router.get("/", sprintResults.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", sprintResults.findOne);

    // Update a Constructor with id
    router.put("/:id", sprintResults.update);

    // Delete a Constructor with id
    router.delete("/:id", sprintResults.delete);

    // Delete all Accounts
    router.delete("/", sprintResults.deleteAll);

    app.use('/api/sprintResults', router);
};
module.exports = app => {
    const results = require("../controllers/results.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", results.create);

    // Retrieve all Constructors
    router.get("/", results.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", results.findOne);

    // Update a Constructor with id
    router.put("/:id", results.update);

    // Delete a Constructor with id
    router.delete("/:id", results.delete);

    // Delete all Accounts
    router.delete("/", results.deleteAll);

    app.use('/api/results', router);
};
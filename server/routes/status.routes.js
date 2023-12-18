module.exports = app => {
    const status = require("../controllers/status.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", status.create);

    // Retrieve all Constructors
    router.get("/", status.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", status.findOne);

    // Update a Constructor with id
    router.put("/:id", status.update);

    // Delete a Constructor with id
    router.delete("/:id", status.delete);

    // Delete all Accounts
    router.delete("/", status.deleteAll);

    app.use('/api/status', router);
};
module.exports = app => {
    const pitstops = require("../controllers/pitstops.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", pitstops.create);

    // Retrieve all Constructors
    router.get("/", pitstops.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", pitstops.findOne);

    // Update a Constructor with id
    router.put("/:id", pitstops.update);

    // Delete a Constructor with id
    router.delete("/:id", pitstops.delete);

    // Delete all Accounts
    router.delete("/", pitstops.deleteAll);

    app.use('/api/pitstops', router);
};
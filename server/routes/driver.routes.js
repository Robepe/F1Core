module.exports = app => {
    const driver = require("../controllers/driver.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", driver.create);

    // Retrieve all Constructors
    router.get("/", driver.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", driver.findOne);

    // Update a Constructor with id
    router.put("/:id", driver.update);

    // Delete a Constructor with id
    router.delete("/:id", driver.delete);

    // Delete all Accounts
    router.delete("/", driver.deleteAll);

    app.use('/api/drivers', router);
};
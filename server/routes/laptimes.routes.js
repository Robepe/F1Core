module.exports = app => {
    const laptimes = require("../controllers/laptimes.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", laptimes.create);

    // Retrieve all Constructors
    router.get("/", laptimes.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", laptimes.findOne);

    // Update a Constructor with id
    router.put("/:id", laptimes.update);

    // Delete a Constructor with id
    router.delete("/:id", laptimes.delete);

    // Delete all Accounts
    router.delete("/", laptimes.deleteAll);

    app.use('/api/laptimes', router);
};
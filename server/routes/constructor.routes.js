module.exports = app => {
    const constructor = require("../controllers/constructor.controller.js");

    var router = require("express").Router();

    // Create a new Constructor
    router.post("/", constructor.create);

    // Retrieve all Constructors
    router.get("/", constructor.findAll);

    // Retrieve a single Constructor with id
    router.get("/:id", constructor.findOne);

    // Update a Constructor with id
    router.put("/:id", constructor.update);

    // Delete a Constructor with id
    router.delete("/:id", constructor.delete);

    // Delete all Accounts
    router.delete("/", constructor.deleteAll);

    app.use('/api/constructor', router);
};
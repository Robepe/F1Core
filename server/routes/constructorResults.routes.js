module.exports = app => {
    const constructorResults = require("../controllers/constructorResults.controller.js");

    var router = require("express").Router();

    // Create a new ConstructorResult
    router.post("/", constructorResults.create);

    // Retrieve all ConstructorResults
    router.get("/", constructorResults.findAll);

    // Retrieve a single ConstructorResult with id
    router.get("/:id", constructorResults.findOne);

    // Update a ConstructorResult with id
    router.put("/:id", constructorResults.update);

    // Delete a ConstructorResult with id
    router.delete("/:id", constructorResults.delete);

    // Delete all Accounts
    router.delete("/", constructorResults.deleteAll);

    app.use('/api/constructorResults', router);
};
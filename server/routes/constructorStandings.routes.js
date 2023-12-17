module.exports = app => {
    const constructorStandings = require("../controllers/constructorStandings.controller.js");

    var router = require("express").Router();

    // Create a new ConstructorStanding
    router.post("/", constructorStandings.create);

    // Retrieve all ConstructorStandings
    router.get("/", constructorStandings.findAll);

    // Retrieve a single ConstructorStanding with id
    router.get("/:id", constructorStandings.findOne);

    // Update a ConstructorStanding with id
    router.put("/:id", constructorStandings.update);

    // Delete a ConstructorStanding with id
    router.delete("/:id", constructorStandings.delete);

    // Delete all Accounts
    router.delete("/", constructorStandings.deleteAll);

    app.use('/api/constructorStandings', router);
};
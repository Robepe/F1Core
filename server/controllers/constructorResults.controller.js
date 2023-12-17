const db = require("../models");
const ConstructorResult = db.constructorResults;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new ConstructorResult
exports.create = (req, res) => {
    // Validate request
    if (!req.body.raceId || !req.body.constructorId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create an ConstructorResult
    const constructorResult = {
        raceId: req.body.raceId,
        constructorId: req.body.constructorId,
        points: req.body.points,
        status: req.body.status
    };

    // Save ConstructorResult in the database
    ConstructorResult.create(constructorResult)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ConstructorResult."
            });
        });
};

// Retrieve all ConstructorResults from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    ConstructorResult.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ConstructorResults."
            });
        });
};

// Find a single ConstructorResult with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ConstructorResult.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ConstructorResult with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving ConstructorResult with id=" + id
            });
        });
};

// Update a ConstructorResult by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ConstructorResult.update(req.body, {
        where: { constructorResultsId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ConstructorResult was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update ConstructorResult with id=${id}. Maybe ConstructorResult was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating ConstructorResult with id=" + id
            });
        });
};

// Delete a ConstructorResult with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ConstructorResult.destroy({
        where: { constructorResultsId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ConstructorResult was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete ConstructorResult with id=${id}. Maybe ConstructorResult was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete ConstructorResult with id=" + id
            });
        });
};

// Delete all ConstructorResults from the database.
exports.deleteAll = (req, res) => {
    ConstructorResult.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} ConstructorResults were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ConstructorResults."
            });
        });
};
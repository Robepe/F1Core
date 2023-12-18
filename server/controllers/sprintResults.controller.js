const db = require("../models");
const SprintResult = db.sprintResults;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new SprintResult
exports.create = (req, res) => {
    // Validate request
    if (!req.body.raceId || !req.body.driverId || !req.body.constructorId || !req.body.grid || !req.body.positionText || !req.body.positionOrder || !req.body.points || !req.body.laps || !req.body.statusId) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a SprintResult
    const sprintResult = {
        raceId: req.body.raceId,
        driverId: req.body.driverId,
        constructorId: req.body.constructorId,
        number: req.body.number,
        grid: req.body.grid,
        position: req.body.position,
        positionText: req.body.positionText,
        positionOrder: req.body.positionOrder,
        points: req.body.points,
        laps: req.body.laps,
        time: req.body.time,
        milliseconds: req.body.milliseconds,
        fastestLap: req.body.fastestLap,
        fastestLapTime: req.body.fastestLapTime,
        fastestLapSpeed: req.body.fastestLapSpeed,
        statusId: req.body.statusId,
    };

    // Save SprintResult in the database
    SprintResult.create(sprintResult)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the SprintResult."
            });
        });
};

// Retrieve all SprintResults from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    SprintResult.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving SprintResults."
            });
        });
};

// Find a single SprintResult with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    SprintResult.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find SprintResult with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving SprintResult with id=" + id
            });
        });
};

// Update a SprintResult by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    SprintResult.update(req.body, {
        where: { sprintResultId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SprintResult was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update SprintResult with id=${id}. Maybe SprintResult was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating SprintResult with id=" + id
            });
        });
};

// Delete a SprintResult with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    SprintResult.destroy({
        where: { sprintResultId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SprintResult was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete SprintResult with id=${id}. Maybe SprintResult was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete SprintResult with id=" + id
            });
        });
};

// Delete all SprintResults from the database.
exports.deleteAll = (req, res) => {
    SprintResult.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} SprintResults were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all SprintResults."
            });
        });
};
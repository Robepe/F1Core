const db = require("../models");
const DriverStanding = db.driverStandings;
const Op = db.Sequelize.Op;

const itemsLimit = 8;

// Create and Save a new DriverStanding
exports.create = (req, res) => {
    // Validate request
    if (!req.body.raceId || !req.body.driverId || !req.body.points || !req.body.wins) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a DriverStanding
    const driverStanding = {
        raceId: req.body.raceId,
        driverId: req.body.driverId,
        points: req.body.points,
        position: req.body.position,
        positionText: req.body.positionText,
        wins: req.body.wins
    };

    // Save DriverStanding in the database
    DriverStanding.create(driverStanding)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the DriverStanding."
            });
        });
};

// Retrieve all DriverStandings from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    DriverStanding.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving DriverStandings."
            });
        });
};

// Find a single DriverStanding with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    DriverStanding.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find DriverStanding with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving DriverStanding with id=" + id
            });
        });
};

// Update a DriverStanding by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    DriverStanding.update(req.body, {
        where: { driverStandingId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "DriverStanding was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update DriverStanding with id=${id}. Maybe DriverStanding was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating DriverStanding with id=" + id
            });
        });
};

// Delete a DriverStanding with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    DriverStanding.destroy({
        where: { driverStandingId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "DriverStanding was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete DriverStanding with id=${id}. Maybe DriverStanding was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete DriverStanding with id=" + id
            });
        });
};

// Delete all DriverStandings from the database.
exports.deleteAll = (req, res) => {
    DriverStanding.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} DriverStandings were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all DriverStandings."
            });
        });
};
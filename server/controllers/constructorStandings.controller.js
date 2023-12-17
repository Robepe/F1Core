const db = require("../models");
const ConstructorStanding = db.constructorStandings;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new ConstructorStanding
exports.create = (req, res) => {
    // Validate request
    if (!req.body.raceId || !req.body.constructorId || !req.body.points || !req.body.wins) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create an ConstructorStanding
    const constructorStanding = {
        raceId: req.body.raceId,
        constructorId: req.body.constructorId,
        points: req.body.points,
        position: req.body.position,
        positionText: req.body.positionText,
        wins: req.body.wins
    };

    // Save ConstructorStanding in the database
    ConstructorStanding.create(constructorStanding)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ConstructorStanding."
            });
        });
};

// Retrieve all ConstructorStandings from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    ConstructorStanding.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ConstructorStandings."
            });
        });
};

// Find a single ConstructorStanding with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ConstructorStanding.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ConstructorStanding with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving ConstructorStanding with id=" + id
            });
        });
};

// Update a ConstructorStanding by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ConstructorStanding.update(req.body, {
        where: { constructorStandingsId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ConstructorStanding was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update ConstructorStanding with id=${id}. Maybe ConstructorStanding was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating ConstructorStanding with id=" + id
            });
        });
};

// Delete a ConstructorStanding with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ConstructorStanding.destroy({
        where: { constructorStandingsId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ConstructorStanding was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete ConstructorStanding with id=${id}. Maybe ConstructorStanding was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete ConstructorStanding with id=" + id
            });
        });
};

// Delete all ConstructorStandings from the database.
exports.deleteAll = (req, res) => {
    ConstructorStanding.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} ConstructorStandings were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ConstructorStandings."
            });
        });
};
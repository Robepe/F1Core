const db = require("../models");
const Qualifying = db.qualifyings;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new Qualifying
exports.create = (req, res) => {
    // Validate request
    if (!req.body.raceId || !req.body.driverId || !req.body.constructorId || !req.body.number) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a Qualifying
    const qualifying = {
        raceId: req.body.raceId,
        driverId: req.body.driverId,
        constructorId: req.body.constructorId,
        number: req.body.number,
        position: req.body.position,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3
    };

    // Save Qualifying in the database
    Qualifying.create(qualifying)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Qualifying."
            });
        });
};

// Retrieve all Qualifyings from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Qualifying.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Qualifyings."
            });
        });
};

// Find a single Qualifying with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Qualifying.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Qualifying with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Qualifying with id=" + id
            });
        });
};

// Update a Qualifying by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Qualifying.update(req.body, {
        where: { qualifyingId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Qualifying was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Qualifying with id=${id}. Maybe Qualifying was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Qualifying with id=" + id
            });
        });
};

// Delete a Qualifying with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Qualifying.destroy({
        where: { qualifyingId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Qualifying was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Qualifying with id=${id}. Maybe Qualifying was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Qualifying with id=" + id
            });
        });
};

// Delete all Qualifyings from the database.
exports.deleteAll = (req, res) => {
    Qualifying.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Qualifyings were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Qualifyings."
            });
        });
};
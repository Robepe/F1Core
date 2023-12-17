const db = require("../models");
const Circuit = db.circuits;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new Circuit
exports.create = (req, res) => {
    // Validate request
    if (!req.body.circuitRef || !req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create an Circuit
    const circuit = {
        circuitRef: req.body.circuitRef,
        name: req.body.name,
        location: req.body.location,
        country: req.body.country,
        lat: req.body.lat,
        lng: req.body.lng,
        alt: req.body.alt,
        url: req.body.url
    };

    // Save Circuit in the database
    Circuit.create(circuit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Circuit."
            });
        });
};

// Retrieve all Circuits from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Circuit.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Circuits."
            });
        });
};

// Find a single Circuit with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Circuit.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Circuit with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Circuit with id=" + id
            });
        });
};

// Update a Circuit by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Circuit.update(req.body, {
        where: { circuitId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Circuit was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Circuit with id=${id}. Maybe Circuit was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Circuit with id=" + id
            });
        });
};

// Delete a Circuit with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Circuit.destroy({
        where: { circuitId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Circuit was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Circuit with id=${id}. Maybe Circuit was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Circuit with id=" + id
            });
        });
};

// Delete all Circuits from the database.
exports.deleteAll = (req, res) => {
    Circuit.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Circuits were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Circuits."
            });
        });
};
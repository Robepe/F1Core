const db = require("../models");
const Driver = db.drivers;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new Driver
exports.create = (req, res) => {
    // Validate request
    if (!req.body.driverRef || !req.body.forename || !req.body.surname || !req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a Driver
    const driver = {
        driverRef: req.body.driverRef,
        number: req.body.number,
        code: req.body.code,
        forename: req.body.forename,
        surname: req.body.surname,
        dob: req.body.dob,
        nationality: req.body.nationality,
        url: req.body.url
    };

    // Save Driver in the database
    Driver.create(driver)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Driver."
            });
        });
};

// Retrieve all Drivers from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Driver.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Drivers."
            });
        });
};

// Find a single Driver with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Driver.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Driver with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Driver with id=" + id
            });
        });
};

// Update a Driver by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Driver.update(req.body, {
        where: { driverId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Driver was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Driver with id=${id}. Maybe Driver was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Driver with id=" + id
            });
        });
};

// Delete a Driver with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Driver.destroy({
        where: { driverId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Driver was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Driver with id=" + id
            });
        });
};

// Delete all Drivers from the database.
exports.deleteAll = (req, res) => {
    Driver.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Drivers were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Drivers."
            });
        });
};
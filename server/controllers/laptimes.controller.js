const db = require("../models");
const Laptime = db.laptimes;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new Laptime
exports.create = (req, res) => {
    // Validate request
    if (!req.body.driverRef || !req.body.forename || !req.body.surname || !req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a Laptime
    const laptime = {
        driverRef: req.body.driverRef,
        number: req.body.number,
        code: req.body.code,
        forename: req.body.forename,
        surname: req.body.surname,
        dob: req.body.dob,
        nationality: req.body.nationality,
        url: req.body.url
    };

    // Save Laptime in the database
    Laptime.create(laptime)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Laptime."
            });
        });
};

// Retrieve all Laptimes from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Laptime.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Laptimes."
            });
        });
};

// Find a single Laptime with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Laptime.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Laptime with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Laptime with id=" + id
            });
        });
};

// Update a Laptime by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Laptime.update(req.body, {
        where: { laptimeId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Laptime was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Laptime with id=${id}. Maybe Laptime was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Laptime with id=" + id
            });
        });
};

// Delete a Laptime with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Laptime.destroy({
        where: { laptimeId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Laptime was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Laptime with id=${id}. Maybe Laptime was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Laptime with id=" + id
            });
        });
};

// Delete all Laptimes from the database.
exports.deleteAll = (req, res) => {
    Laptime.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Laptimes were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Laptimes."
            });
        });
};
const db = require("../models");
const Season = db.seasons;
const Op = db.Sequelize.Op;

const itemsLimit = 8;

// Create and Save a new Season
exports.create = (req, res) => {
    // Validate request
    if (!req.body.year) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a Season
    const season = {
        year: req.body.year,
        url: req.body.url,
    };

    // Save Season in the database
    Season.create(season)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Season."
            });
        });
};

// Retrieve all Seasons from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Season.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Seasons."
            });
        });
};

// Find a single Season with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Season.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Season with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Season with id=" + id
            });
        });
};

// Update a Season by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Season.update(req.body, {
        where: { year: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Season was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Season with id=${id}. Maybe Season was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Season with id=" + id
            });
        });
};

// Delete a Season with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Season.destroy({
        where: { year: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Season was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Season with id=${id}. Maybe Season was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Season with id=" + id
            });
        });
};

// Delete all Seasons from the database.
exports.deleteAll = (req, res) => {
    Season.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Seasons were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Seasons."
            });
        });
};
const db = require("../models");
const Race = db.races;
const Op = db.Sequelize.Op;

const itemsLimit = 8;

// Create and Save a new Race
exports.create = (req, res) => {
    // Validate request
    if (!req.body.year || !req.body.round || !req.body.circuitId || !req.body.name || !req.body.date) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a Race
    const race = {
        year: req.body.year,
        round: req.body.round,
        circuitId: req.body.circuitId,
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        url: req.body.url,
        fp1_date: req.body.fp1_date,
        fp1_time: req.body.fp1_time,
        fp2_date: req.body.fp2_date,
        fp2_time: req.body.fp2_time,
        fp3_date: req.body.fp3_date,
        fp3_time: req.body.fp3_time,
        quali_date: req.body.quali_date,
        quali_time: req.body.quali_time,
        sprint_date: req.body.sprint_date,
        sprint_time: req.body.sprint_time,
    };

    // Save Race in the database
    Race.create(race)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Race."
            });
        });
};

// Retrieve all Races from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Race.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Races."
            });
        });
};

// Find a single Race with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Race.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Race with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Race with id=" + id
            });
        });
};

// Update a Race by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Race.update(req.body, {
        where: { raceId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Race was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Race with id=${id}. Maybe Race was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Race with id=" + id
            });
        });
};

// Delete a Race with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Race.destroy({
        where: { raceId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Race was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Race with id=${id}. Maybe Race was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Race with id=" + id
            });
        });
};

// Delete all Races from the database.
exports.deleteAll = (req, res) => {
    Race.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Races were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Races."
            });
        });
};
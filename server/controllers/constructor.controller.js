const db = require("../models");
const Constructor = db.constructors;
const Op = db.Sequelize.Op;

const itemsLimit = 20;

// Create and Save a new Constructor
exports.create = (req, res) => {
    // Validate request
    if (!req.body.constructorRef || !req.body.name || !req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    };

    // Create a Constructor
    const constructor = {
        constructorRef: req.body.constructorRef,
        name: req.body.name,
        nationality: req.body.nationality,
        url: req.body.url
    };

    // Save Constructor in the database
    Constructor.create(constructor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Constructor."
            });
        });
};

// Retrieve all Constructors from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

    Constructor.findAll({ limit: itemsLimit, where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Constructors."
            });
        });
};

// Find a single Constructor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Constructor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Constructor with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Constructor with id=" + id
            });
        });
};

// Update a Constructor by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Constructor.update(req.body, {
        where: { constructorId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Constructor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Constructor with id=${id}. Maybe Constructor was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Constructor with id=" + id
            });
        });
};

// Delete a Constructor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Constructor.destroy({
        where: { constructorId: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Constructor was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Constructor with id=${id}. Maybe Constructor was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Constructor with id=" + id
            });
        });
};

// Delete all Constructors from the database.
exports.deleteAll = (req, res) => {
    Constructor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Constructors were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Constructors."
            });
        });
};
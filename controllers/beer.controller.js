const db = require("../models");
const Beer = db.beers;
const Format = db.formats;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const beer = {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        abv: req.body.abv,
        ibu: req.body.ibu,
    };
    Beer.create(beer)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the beer."
            });
        });
};

// Retrieve all beers from the database.
exports.findAll = (req, res) => {
    Beer.findAll({ include: Format })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving beers."
            });
        });
};

// Find a single Beer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Beer.findOne({ include: Format, where: {id}})
    .then(data => {
        if (data == null) {
            res.status(500).send({
                message: "Some error occurred while retrieving beer"
            });
        } else
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving beer"
        });
    });
};

// Update a Beer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Beer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            res.send({
                message: "Beer was updated successfully."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Beer with id=" + id
            });
        });
};
// Delete a Beer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Beer.destroy({
        where: { id: id }
    })
        .then(num => {
            res.status(204).send({
                message: "Beer was deleted successfully!"
            });
        })
        .catch(err => {
            res.status(404).send({
                message: "Could not delete Beer with id=" + id
            });
        });
};
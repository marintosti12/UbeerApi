const db = require("../models");
const Brewery = db.brewerys;
const Beer = db.beers;

const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all beers from the database.
exports.findAll = (req, res) => {
    Brewery.findAll({ include: Beer })
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
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Brewery.findOne({ include: [{
        model: db.beers,
        include: [{
            model: db.formats
        }]
    }], where: {id}})
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
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
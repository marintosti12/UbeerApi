const db = require("../models");
const Brewery = db.brewerys;
const Beer = db.beers;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const brewery = {
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        image: req.body.image,
    };
    Brewery.create(brewery)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Brewery."
        });
    });
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
// Retrieve all beers from the database.
exports.findAllCities = (req, res) => {
    Brewery.findAll({attributes: ['city'], group: ['city']})
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

// Retrieve all beers from the database.
exports.findCityByName = (req, res) => {
    const name = req.params.name;

    Brewery.findAll({where: {
        city: name
    }}).then(data => {
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

// Retrieve all beers from the database.
exports.paginate = (req, res) => {

    let name = "";

    if (req.query.city !== undefined)
        name = req.query.city;

    Brewery.findAndCountAll({ include: Beer , limit: req.params.limit, offset: req.params.offset, order: [['name', 'DESC']],  where: {
            city: { [Op.like]: `%${name}%` },
        },})
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
    const id = req.params.id;
    Brewery.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        res.send({
            message: "Brewery was updated successfully."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Brewery with id=" + id
        });
    });
};
// Delete a Brewery with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Brewery.destroy({
        where: { id: id }
    })
    .then(num => {
        res.send({
            message: "Brewery was deleted successfully!"
        });
    })
    .catch(err => {
        res.status(404).send({
            message: "Could not delete Brewery with id=" + id
        });
    });
};
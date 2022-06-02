module.exports = app => {
    const beers = require("../controllers/beer.controller.js");
    const router = require("express").Router();

    router.get("/", beers.findAll);
    app.use('/api/beers', router);
};
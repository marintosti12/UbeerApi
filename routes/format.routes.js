const beers = require("../controllers/format.controller.js");

module.exports = app => {
    const formats = require("../controllers/format.controller.js");
    const router = require("express").Router();

    router.get("/", formats.findAll);
    app.use('/api/formats', router);
};
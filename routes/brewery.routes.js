const breweries = require("../controllers/brewery.controller.js");
module.exports = app => {
    const breweries = require("../controllers/brewery.controller.js");
    const router = require("express").Router();

    router.get("/", breweries.findAll);
    router.get("/:id", breweries.findOne);
    router.get("/:limit/:offset", breweries.paginate);

    app.use('/api/breweries', router);
};
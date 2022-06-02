const breweries = require("../controllers/brewery.controller.js");
module.exports = app => {
    const beers = require("../controllers/beer.controller.js");
    const router = require("express").Router();

    router.post("/", beers.create);
    router.delete("/:id", beers.delete);
    router.put("/:id", beers.update);
    router.get("/:id", beers.findOne);


    router.get("/", beers.findAll);
    app.use('/api/beers', router);
};
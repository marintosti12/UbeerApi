const breweries = require("../controllers/brewery.controller.js");
module.exports = app => {
    const breweries = require("../controllers/brewery.controller.js");
    const router = require("express").Router();

    router.post("/", breweries.create);
    router.delete("/:id", breweries.delete);
    router.put("/:id", breweries.update);
    router.get("/:id", breweries.findOne);




    router.get("/", breweries.findAll);
    router.get("/:limit/:offset", breweries.paginate);

    app.use('/api/breweries', router);
};
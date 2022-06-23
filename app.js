const express = require("express");
const app = express();
const cors = require('cors');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/beer.routes")(app);
require("./routes/format.routes")(app);
require("./routes/brewery.routes")(app);

module.exports = app;


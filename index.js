const express = require("express");
const app = express();


app.use(express.json({ extended: false }));

app.use(express.urlencoded({ extended: true }));


//const db = require("./models");

/*/db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});/*/

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Ubeer application." });
});

require("./routes/beer.routes")(app);
require("./routes/format.routes")(app);
require("./routes/brewery.routes")(app);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
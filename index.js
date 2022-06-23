const express = require("express");
const app = express();
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./models");

const checkJwt = auth({
    audience: 'http://app-238342ae-111e-4650-a050-cb6e75802a39.cleverapps.io/',
    issuerBaseURL: `https://dev-5e00y2tf.us.auth0.com/`,
});

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Ubeer application." });
});

require("./routes/beer.routes")(app);
require("./routes/format.routes")(app);
require("./routes/brewery.routes")(app);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
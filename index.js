const express = require("express");
const app = express();
const cors = require('cors');

const allowedOrigins = ['https://ubeer-kohl.vercel.app/', 'https://app-238342ae-111e-4650-a050-cb6e75802a39.cleverapps.io/'];
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json({ extended: false }));

app.use(express.urlencoded({ extended: true }));


const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Ubeer application." });
});

require("./routes/beer.routes")(app);
require("./routes/format.routes")(app);
require("./routes/brewery.routes")(app);


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
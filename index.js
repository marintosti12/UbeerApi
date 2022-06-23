const { auth } = require('express-oauth2-jwt-bearer');
const app = require('./app');
const db = require("./models");


const checkJwt = auth({
    audience: 'https://ubeer-app.herokuapp.com/',
    issuerBaseURL: `https://dev-5e00y2tf.us.auth0.com/`,
});

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Ubeer application." });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`The app listening at http://localhost:${PORT}`)
);



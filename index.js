const { auth } = require('express-oauth2-jwt-bearer');
const app = require('./app');
const db = require("./models");
var jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-5e00y2tf.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://ubeer-app.herokuapp.com/',
    issuer: 'https://dev-5e00y2tf.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);
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



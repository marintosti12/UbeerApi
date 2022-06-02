const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.beers = require("./beer.model.js")(sequelize, Sequelize);
db.formats = require("./format.model.js")(sequelize, Sequelize);
db.brewerys = require("./brewery.model.js")(sequelize, Sequelize);

//Join between beer and format
db.formats.hasOne(db.beers);
db.beers.belongsTo(db.formats);

//Join between beer and brewery
db.brewerys.hasMany(db.beers);
db.beers.belongsTo(db.brewerys);


//Join between beer and brewery

module.exports = db;
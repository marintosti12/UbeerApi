module.exports = (sequelize, Sequelize) => {
    const Brewery = sequelize.define("brewery", {
        name: {
            type: Sequelize.TEXT
        },
        city: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, { timestamps: false });
    return Brewery;
};
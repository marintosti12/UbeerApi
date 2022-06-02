module.exports = (sequelize, Sequelize) => {
    const Beer = sequelize.define("beer", {
        name: {
            type: Sequelize.TEXT
        },
        category: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT
        },
        abv: {
            type: Sequelize.FLOAT
        },
        ibu: {
            type: Sequelize.INTEGER
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, { timestamps: false });
    return Beer;
};
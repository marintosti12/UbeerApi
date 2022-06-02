module.exports = (sequelize, Sequelize) => {
    const Format = sequelize.define("format", {
        name: {
            type: Sequelize.TEXT
        },
        volume: {
            type: Sequelize.INTEGER
        },
        unit: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, { timestamps: false });
    return Format;
};
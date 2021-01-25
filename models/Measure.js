const Sequelize = require("sequelize");
const measureParams = {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      len: [0,30]
    }
  };
  exports.measureParams = measureParams;
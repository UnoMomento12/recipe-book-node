const Sequelize = require("sequelize");
const sequelize = new Sequelize("SeqTest", "sa", "SQL14051997", {
  dialect: "mssql",
  host: "localhost",
  define: {
    timestamps: false
  }
});
//-----------------------------------------------
const measureModule = require("../models/Measure");
const measureParams = measureModule.Measure;

const Measure = sequelize.define( "Measure" , measureParams);
//-----------------------------------------------
sequelize.sync().then(result=>console.log(result))
.catch(err=> console.log(err));
// Exports 
exports.Measure = Measure;
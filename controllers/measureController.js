const measure = require("../ms database/DB Context");
const Measure = measure.Measure;
exports.index = function (request, response){
    response.render("./measures/index.hbs", {
        measures: Measure.findAll()
    });
}
exports.createMeasure = function (request, response){
    response.send("Creating a measure");
};
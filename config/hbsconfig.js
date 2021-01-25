const expressHbs = require("express-handlebars");
const hbs = require("hbs");

const path = require("path");
const setUpHbs = function(app){
    app.engine("hbs", expressHbs(
        {
            layoutsDir: "views/layouts", 
            defaultLayout: "layout",
            extname: "hbs"
        }
    ))
    app.set("view engine", "hbs");
    hbs.registerPartials(__dirname + "/views/partials");

    // setViewFolders(app);
}

// function setViewFolders(app){
//     app.set("measures", [ path.join(__dirname, "views/measures")]);
// }
exports.configureHbs = setUpHbs;
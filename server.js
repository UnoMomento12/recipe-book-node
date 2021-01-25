const express = require("express");
const app = express();
const staticConfig = require("./config/staticconfig");
const routesConfig = require("./config/routeconfig");
const hbsConfig = require("./config/hbsconfig");
const configureStatic = staticConfig.configureStatic;
const configureRoutes = routesConfig.configureRoutes;
const configureHbs = hbsConfig.configureHbs;

configureStatic(app, express);
configureRoutes(app);
configureHbs(app);
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000);
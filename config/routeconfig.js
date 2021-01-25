const measureRouter = require("../routes/measureRouter");
const homeRouter = require("../routes/homeRouter");

const configureRoutes = function (app){
    app.use("/", homeRouter.homeRouter);
    app.use("/measures", measureRouter.measureRouter);;
}
exports.configureRoutes = configureRoutes;
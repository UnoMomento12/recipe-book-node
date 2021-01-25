const express = require("express");
const measureController = require("../controllers/measureController.js");
const measureRouter = express.Router();
 
measureRouter.get("/create", measureController.createMeasure);
measureRouter.get("/", measureController.index);
 
exports.measureRouter = measureRouter;
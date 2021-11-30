"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Middlewares that I going to use here
var readCookie_1 = require("../middleware/readCookie");
var readOrganization_1 = require("../middleware/readOrganization");
//I import the function of the Controlers that Im going to use here
var controllerClients_1 = require("../controllers/controllerClients");
router.post('/create', readCookie_1.cookieRead, readOrganization_1.setOrganizationId, controllerClients_1.createClient);
router.get('/allClients', readCookie_1.cookieRead, readOrganization_1.setOrganizationId, controllerClients_1.allClients);
module.exports = router;

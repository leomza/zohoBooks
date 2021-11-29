"use strict";

exports.__esModule = true;

var express = require('express');

var router = express.Router(); //I import the function of the Controlers that Im going to use here

var controllerClients_1 = require("../controllers/controllerClients");

router.post('/create', controllerClients_1.createClient);
module.exports = router;
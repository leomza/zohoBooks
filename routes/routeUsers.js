"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Controlers that Im going to use here
var controllerUsers_1 = require("../controllers/controllerUsers");
router.get('/auth', controllerUsers_1.getToken);
module.exports = router;

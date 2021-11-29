"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//I import the function of the Middlewares that I going to use here
var readCookie_1 = require("../middleware/readCookie");
//I import the function of the Controlers that Im going to use here
var controllerInvoices_1 = require("../controllers/controllerInvoices");
router.post('/create', readCookie_1.cookieRead, controllerInvoices_1.createInvoice);
router.get('/allInvoices', readCookie_1.cookieRead, controllerInvoices_1.allInvoices);
module.exports = router;

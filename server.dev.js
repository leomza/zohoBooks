"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var cookieParser = require('cookie-parser');

var path = require('path');

var pathToPublicFolder = path.resolve(__dirname, './public');
app.use(express.json());
app.use(express["static"](pathToPublicFolder)); //I use this to read a cookie

app.use(cookieParser()); //Route (I import the routes of activities)

var userRoute = require('./routes/routeUsers');

var clientRoute = require('./routes/routeClients');

var invoiceRoute = require('./routes/routeInvoices'); //Use of that Routes that I imported


app.use('/users', userRoute);
app.use('/clients', clientRoute);
app.use('/invoices', invoiceRoute);
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});
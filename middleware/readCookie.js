"use strict";
exports.__esModule = true;
exports.cookieRead = void 0;
var jwt = require('jwt-simple');
require('dotenv').config();
function cookieRead(req, res, next) {
    try {
        var userToken = req.cookies.userToken;
        if (userToken) {
            var decoded = jwt.decode(userToken, process.env.SECRET_KEY);
            var cookie = JSON.parse(decoded);
            var access_token = cookie.access_token;
            req.token = access_token;
            next();
        }
        else {
            res.status(401).send({ cookieExist: req.cookieExists, message: 'The session has expired. Please log in again.' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.cookieRead = cookieRead;

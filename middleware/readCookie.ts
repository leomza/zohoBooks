export { };
const jwt = require('jwt-simple');
require('dotenv').config();

export function cookieRead(req, res, next) {
    try {
        const { userToken } = req.cookies;

        if (userToken) {
            const decoded = jwt.decode(userToken, process.env.SECRET_KEY);
            const cookie = JSON.parse(decoded);
            const { access_token } = cookie;

            req.token = access_token;
            next();
        } else {
            res.status(401).send({ cookieExist: req.cookieExists, message: 'The session has expired. Please log in again.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
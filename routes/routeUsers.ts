export { };
const express = require('express');
const router = express.Router();

//I import the function of the Controlers that Im going to use here
import { getToken } from '../controllers/controllerUsers'

router.get('/auth', getToken);

module.exports = router;
export { };
const express = require('express');
const router = express.Router();

//I import the function of the Middlewares that I going to use here
import { cookieRead } from '../middleware/readCookie';

//I import the function of the Controlers that Im going to use here
import { createClient, allClients } from '../controllers/controllerClients'

router.post('/create', cookieRead, createClient);
router.get('/allClients', cookieRead, allClients);

module.exports = router;
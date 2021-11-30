export { };
const express = require('express');
const router = express.Router();

//I import the function of the Middlewares that I going to use here
import { cookieRead } from '../middleware/readCookie';
import { setOrganizationId } from '../middleware/readOrganization';

//I import the function of the Controlers that Im going to use here
import { createClient, allClients } from '../controllers/controllerClients'

router.post('/create', cookieRead, setOrganizationId, createClient);
router.get('/allClients', cookieRead, setOrganizationId, allClients);

module.exports = router;
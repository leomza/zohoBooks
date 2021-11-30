export { };
const express = require('express');
const router = express.Router();

//I import the function of the Middlewares that I going to use here
import { cookieRead } from '../middleware/readCookie';
import { setOrganizationId } from '../middleware/readOrganization';

//I import the function of the Controlers that Im going to use here
import { createInvoice, allInvoices } from '../controllers/controllerInvoices'

router.post('/create', cookieRead, setOrganizationId, createInvoice);
router.get('/allInvoices', cookieRead, setOrganizationId, allInvoices);

module.exports = router;
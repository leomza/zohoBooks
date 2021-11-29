export { };
const express = require('express');
const router = express.Router();

//I import the function of the Middlewares that I going to use here
import { cookieRead } from '../middleware/readCookie';

//I import the function of the Controlers that Im going to use here
import { createInvoice, allInvoices } from '../controllers/controllerInvoices'

router.post('/create', cookieRead, createInvoice);
router.get('/allInvoices', cookieRead, allInvoices);

module.exports = router;
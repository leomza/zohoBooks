"use strict";

var mysql = require('mysql');

require('dotenv').config();

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE_NAME
});

var query = function query(queryText) {
  return new Promise(function (resolve, reject) {
    pool.query(queryText, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}; //Clients:


var getAllClients = function getAllClients() {
  var allClients;
  return regeneratorRuntime.async(function getAllClients$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(query("SELECT * FROM clients"));

        case 2:
          allClients = _context.sent;
          return _context.abrupt("return", allClients);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var addClient = function addClient(contactId, contactName, companyName, organizationId) {
  var addedClient;
  return regeneratorRuntime.async(function addClient$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(query("INSERT INTO clients (contact_id, contact_name, company_name, organization_id) VALUES ('".concat(contactId, "', '").concat(contactName, "', '").concat(companyName, "', '").concat(organizationId, "')")));

        case 2:
          addedClient = _context2.sent;
          return _context2.abrupt("return", addedClient);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //Invoices:


var addInvoice = function addInvoice(contactId, contactName, companyName, organizationId) {
  var addedClient;
  return regeneratorRuntime.async(function addInvoice$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(query("INSERT INTO invoices (invoice_id, contact_id, total, organization_id) VALUES ('".concat(contactId, "', '").concat(contactName, "', '").concat(companyName, "', '").concat(organizationId, "')")));

        case 2:
          addedClient = _context3.sent;
          return _context3.abrupt("return", addedClient);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  query: query,
  getAllClients: getAllClients,
  addClient: addClient,
  addInvoice: addInvoice
};
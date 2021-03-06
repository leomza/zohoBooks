const mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DATA_BASE_PASSWORD,
  database: process.env.DATA_BASE_NAME
})

const query = queryText => {
  return new Promise((resolve, reject) => {
    pool.query(queryText, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

//Clients:
const getAllClients = async () => {
  const allClients = await query(`SELECT * FROM clients`)
  return allClients
}

const addClient = async (contactId, contactName, companyName, organizationId) => {
  const addedClient = await query(
    `INSERT INTO clients (contact_id, contact_name, company_name, organization_id) VALUES ('${contactId}', '${contactName}', '${companyName}', '${organizationId}')`
  )
  return addedClient
}

//Invoices:
const addInvoice = async (contactId, contactName, companyName, organizationId) => {
  const addedClient = await query(
    `INSERT INTO invoices (invoice_id, contact_id, total, organization_id) VALUES ('${contactId}', '${contactName}', '${companyName}', '${organizationId}')`
  )
  return addedClient
}

module.exports = { query, getAllClients, addClient, addInvoice }

export { };
require("dotenv").config();
import { ZohoApi } from "../apis/zohoApi";
const { query, addClient, getAllClients } = require("../data/datadb");

//Create the table in SQL if is not exist
query(
    `CREATE TABLE IF NOT EXISTS clients (
        contact_id      VARCHAR(255) NOT NULL,
        contact_name    VARCHAR(255) NOT NULL,
        company_name    VARCHAR(255) NOT NULL,
        created_date  DATE DEFAULT (CURRENT_DATE),
        PRIMARY KEY(contact_id))`
).then(() => console.log("Table Clients Created"))
    .catch((err) => console.log(err));

export async function createClient(req, res) {
    try {
        const { contactName, companyName } = req.body;
        const contact = {
            "contact_name": contactName,
            "company_name": companyName
        };
        //Add the client to the App Zoho Books
        const newClient = await new ZohoApi(req.token, req.organizationId).createContact("contacts", contact)
        //Add the client in SQL
        await addClient(newClient.data.contact.contact_id, contactName, companyName);
        res.end()
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function allClients(req, res) {
    try {
        const clientsInfo = await new ZohoApi(req.token, req.organizationId).getAllContacts("contacts")
        res.send(clientsInfo.data)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
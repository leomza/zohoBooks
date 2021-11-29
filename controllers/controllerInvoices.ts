export { };
require("dotenv").config();
import { ZohoApi } from "../apis/zohoApi";
const { query, addInvoice } = require("../data/datadb");

//Create the table in SQL if is not exist
query(
    `CREATE TABLE IF NOT EXISTS invoices (
        invoice_id      VARCHAR(255) NOT NULL,
        contact_id    VARCHAR(255) NOT NULL,
        total    INT(200) NOT NULL,
        created_date  DATE DEFAULT (CURRENT_DATE),
        PRIMARY KEY(invoice_id))`
).then(() => console.log("Table Invoice Created"))
    .catch((err) => console.log(err));

export async function createInvoice(req, res) {
    try {
        const { clientId, description, total } = req.body;
        const invoice = {
            "customer_id": clientId,
            "line_items": [
                {
                    "item_id": "227465000000045237",
                    "item_order": 1,
                    "bcy_rate": total,
                    "rate": total,
                    "quantity": 1,
                }],
            "header_name": "Testing invoices",
            "reason": description,
        }

        //Add the invoice to the App Zoho Books
        const newInvoice = await new ZohoApi(req.token).createInvoice("invoices", invoice)
        //Add the invoice in SQL
        await addInvoice(newInvoice.data.invoice.invoice_id, clientId, total);
        res.end()
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function allInvoices(req, res) {
    try {
        const invoicesInfo = await new ZohoApi(req.token).getAllInvoices("invoices")
        res.send(invoicesInfo.data)
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
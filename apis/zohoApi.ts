export { };
import axios from "axios"
require("dotenv").config();

export class ZohoApi {
    accessToken: string

    constructor(accessToken) {
        this.accessToken = accessToken
    }

    //Contacts:
    getContact(endpoint, id) {
        return this._requestGet(axios.get, process.env.BASE_URL + endpoint + `/${id}`)
    }

    createContact(endpoint, newContact) {
        return this._requestPost(axios.post, process.env.BASE_URL + endpoint, newContact)
    }

    getAllContacts(endpoint) {
        return this._requestGet(axios.get, process.env.BASE_URL + endpoint)
    }

    //Invoices:
    createInvoice(endpoint, newInvoice) {
        return this._requestPost(axios.post, process.env.BASE_URL + endpoint, newInvoice)
    }

    getAllInvoices(endpoint) {
        return this._requestGet(axios.get, process.env.BASE_URL + endpoint)
    }

    async _requestPost(method, url, body) {
        return await method(url, body, { headers: { "Authorization": `Zoho-oauthtoken ${this.accessToken}`, params: { organization_id: "20079813562" } } })
    }

    async _requestGet(method, url) {
        return await method(url, { headers: { "Authorization": `Zoho-oauthtoken ${this.accessToken}`, params: { organization_id: "20079813562" } } })
    }
}
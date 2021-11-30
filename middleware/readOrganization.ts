export { };
import axios from "axios";
import { ZohoApi } from "../apis/zohoApi";

export async function setOrganizationId(req, res, next) {
    try {
        const organizationId = await axios.get(`https://books.zoho.eu/api/v3/organizations`, { headers: { "Authorization": `Zoho-oauthtoken ${req.token}` } })
        req.organizationId = organizationId.data.organizations[0].organization_id;
        next()
    } catch (error) {
        console.error(error);
    }
}
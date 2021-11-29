export { };
import axios from 'axios';
require("dotenv").config();
const jwt = require('jwt-simple');

export async function getToken(req, res) {
    try {
        const { query: { code } } = req;
        const { data: { access_token } } = await axios.post(`https://accounts.zoho.eu/oauth/v2/token?code=${code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:3000/users/auth&grant_type=authorization_code`)
        
        //Then I set the cookie for 60 minutes
        const cookieToWrite: string = JSON.stringify({ access_token });
        const token = jwt.encode(cookieToWrite, process.env.SECRET_KEY);
        res.cookie("userToken", token, { maxAge: 3600000, httpOnly: true });
        res.redirect('/01-main.html')
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
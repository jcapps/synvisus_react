'use strict';
import axios from 'axios';

const KEY = process.env.MAILGUN_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

class EmailApi {
    static sendEmail(email) {
        return new Promise((resolve, reject) => {
            axios.post('/mail', {email: email}).then(res => {
                resolve(res.data);
            });
        });
    }
}

export default EmailApi;
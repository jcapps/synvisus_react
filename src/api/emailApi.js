import axios from 'axios';

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
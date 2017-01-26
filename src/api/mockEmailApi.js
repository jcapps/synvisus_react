import delay from './delay';

class EmailApi {
    static sendEmail(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }
}

export default EmailApi;
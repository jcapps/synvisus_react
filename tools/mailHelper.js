import * as MAILGUN_INFO from './private/mailgunInfo';
import mailgun from 'mailgun-js';
const mg = mailgun({apiKey: MAILGUN_INFO.KEY, domain: MAILGUN_INFO.DOMAIN});

const sendMail = (email, callback) => {
    const subjectHeader = "Message from Synvisus: " 
        + email.firstName + " " + email.lastName + " <" + email.emailAddress + ">";
    let testEmail = {
        from: 'noreply.sba@gmail.com',
        to: ['jamesmcapps@gmail.com'],
        subject: subjectHeader,
        text: email.message
    };
    
    mg.messages().send(testEmail, function (error, body) {
        callback(error, body);
    });
};

export default sendMail;
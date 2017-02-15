import * as MAILGUN_INFO from './private/mailgunInfo';
import * as MAILING_DETAILS from './private/mailingDetails';
import mailgun from 'mailgun-js';
const mg = mailgun({apiKey: MAILGUN_INFO.KEY, domain: MAILGUN_INFO.DOMAIN});

const sendMail = (email, callback) => {
    const subjectHeader = "Message from Synvisus: " 
        + email.firstName + " " + email.lastName + " <" + email.emailAddress + ">";
    let testEmail = {
        from: MAILING_DETAILS.SENDER_ADDRESS,
        to: MAILING_DETAILS.RECIPIENTS,
        subject: subjectHeader,
        text: email.message
    };
    
    mg.messages().send(testEmail, function (error, body) {
        callback(error, body);
    });
};

export default sendMail;
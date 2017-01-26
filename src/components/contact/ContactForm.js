import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

const ContactForm = ({sendEmail, isSending, errors}) => {
    const buttonText = isSending ? "Sending..." : "Send Email";
    return (
        <form>
            <table>
                <tbody>
                    <tr><td><TextInput name="first-name" label="First Name" error={errors.firstName}/></td></tr>
                    <tr><td><TextInput name="last-name" label="Last Name" error={errors.lastName}/></td></tr>
                    <tr><td><TextInput name="email-address" label="E-mail Address" error={errors.emailAddress}/></td></tr>
                    <tr><td><TextArea name="email-message" label="Message" rows="8" cols="80" error={errors.emailMessage}/></td></tr>
                    <tr><td><button className="btn btn-primary" type="submit" onClick={sendEmail} disabled={isSending}>{buttonText}</button></td></tr>
                </tbody>
            </table>
        </form>
    );
};

ContactForm.propTypes = {
    sendEmail: React.PropTypes.func.isRequired,
    isSending: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired
};

export default ContactForm;
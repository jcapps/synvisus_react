import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';
import emailApi from '../../api/emailApi';
import toastr from 'toastr';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            isSending: false
        };

        this.sendEmail = this.sendEmail.bind(this);
        toastr.options = { positionClass: "toastr-center" };
    }

    clearFields() {
        document.querySelector('#first-name').value = '';
        document.querySelector('#last-name').value = '';
        document.querySelector('#email-address').value = '';
        document.querySelector('#email-message').value = '';
    }

    contactFormIsValid() {
        let formIsValid = true;
        let errors = {};
        let email = {
            firstName: document.querySelector('#first-name').value,
            lastName: document.querySelector('#last-name').value,
            emailAddress: document.querySelector('#email-address').value,
            message: document.querySelector('#email-message').value
        };

        if (email.firstName.length == 0) {
            errors.firstName = 'Please enter a First Name.';
            formIsValid = false;
        }

        if (email.lastName.length == 0) {
            errors.lastName = 'Please enter a Last Name.';
            formIsValid = false;
        }

        if (email.emailAddress.length == 0) {
            errors.emailAddress = 'Please enter an E-mail Address.';
            formIsValid = false;
        } else {
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let isEmailValid = regex.test(email.emailAddress);
            if (!isEmailValid) {
                errors.emailAddress = 'Not a valid E-mail Address.';
                formIsValid = false;
            }
        }

        if (email.message.length == 0) {
            errors.emailMessage = 'Please enter an E-mail Message.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return {isValid: formIsValid, email: email};
    }

    sendEmail(e) {
        e.preventDefault();
        this.setState({isSending: true});

        let validationResults = this.contactFormIsValid();
        if(validationResults.isValid) {
            return emailApi.sendEmail(validationResults.email).then(wasEmailed => {
                if (wasEmailed) {
                    toastr.success("Email sent successfully.");
                    this.clearFields();
                    this.setState({isSending: false});
                } else {
                    toastr.error('Error: There was a problem trying to send your email. Email was not sent.');
                    this.setState({isSending: false});
                }
            });
        } else {
            this.setState({isSending: false});
        }
    }

    render() {
        const errors = this.state.errors;
        const buttonText = this.state.isSending ? "Sending..." : "Send Email";
        return (
            <form>
                <table>
                    <tbody>
                        <tr><td><TextInput name="first-name" label="First Name" error={errors.firstName}/></td></tr>
                        <tr><td><TextInput name="last-name" label="Last Name" error={errors.lastName}/></td></tr>
                        <tr><td><TextInput name="email-address" label="E-mail Address" error={errors.emailAddress}/></td></tr>
                        <tr><td><TextArea name="email-message" label="Message" rows="8" cols="80" error={errors.emailMessage}/></td></tr>
                        <tr><td><button className="btn btn-primary" type="submit" onClick={this.sendEmail} disabled={this.state.isSending}>{buttonText}</button></td></tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default ContactForm;
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as emailActions from '../../actions/emailActions';
import ContactForm from './ContactForm';
import toastr from 'toastr';

class ContactUsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            isSending: false
        };

        this.sendEmail = this.sendEmail.bind(this);
        toastr.options = { positionClass: "toastr-center" };
    }

    componentDidMount() {
        document.title = "Synvisus: Contact Us";
        window.scrollTo(0, 0);
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

    sendEmail(event) {
        event.preventDefault();
        this.setState({isSending: true});

        let validationResults = this.contactFormIsValid();
        if(validationResults.isValid) {
            this.props.actions.sendEmail(validationResults.email)
                .then(() => {
                    toastr.success("Email sent successfully.");
                    this.clearFields();
                    this.setState({isSending: false});
                })
                .catch(error => {
                    toastr.error(error);
                    this.setState({isSending: false});
                });
        } else {
            this.setState({isSending: false});
        }
    }

    render() {
        return (
            <div id="contact-page">
                <h3 className="section-header"><b>Contact Us</b></h3>
                <p>We encourage you to contact us with any inquiries or to set up a consultation.</p>
                <br/>
                <h4>By Phone</h4>
                <p>(314) 384-6204</p>
                <br/>
                <h4>By Mail</h4>
                <p>
                    P.O. Box 410474<br/>
                    St. Louis, MO 63141
                </p>
                <br/>
                <h4>By E-mail</h4>
                <ContactForm
                    sendEmail={this.sendEmail}
                    isSending={this.state.isSending}
                    errors={this.state.errors}/>
            </div>
        );
    }
}

ContactUsPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(emailActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(ContactUsPage);
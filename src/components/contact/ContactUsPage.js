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
            email: {},
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

    contactFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (document.querySelector('#first-name').value.length == 0) {
            errors.firstName = 'Please enter a First Name.';
            formIsValid = false;
        }

        if (document.querySelector('#last-name').value.length == 0) {
            errors.lastName = 'Please enter a Last Name.';
            formIsValid = false;
        }

        if (document.querySelector('#email-address').value.length == 0) {
            errors.emailAddress = 'Please enter an E-mail Address.';
            formIsValid = false;
        }

        if (document.querySelector('#email-message').value.length == 0) {
            errors.emailMessage = 'Please enter an E-mail Message.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    sendEmail(event) {
        event.preventDefault();
        this.setState({isSending: true});

        if(this.contactFormIsValid()) {
            this.props.actions.sendEmail(this.state.email)
                .then(() => {
                    toastr.success("Email sent successfully.");
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
                <h3><b>Contact Us</b></h3>
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
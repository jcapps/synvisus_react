import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as emailActions from '../../actions/emailActions';
import TextInput from '../common/TextInput';
import toastr from 'toastr';

class ContactForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: {},
            errors: {}
        };

        this.sendEmail = this.sendEmail.bind(this);
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

        this.setState({errors: errors});
        return formIsValid;
    }

    sendEmail(event) {
        event.preventDefault();

        if(!this.contactFormIsValid()) {
            return;
        }

        //this.setState({saving: true});
        this.props.actions.sendEmail(this.state.email)
            .then()
            .catch(error => {
                toastr.error(error);
                //this.setState({saving: false});
            });
    }

    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr><td><TextInput name="first-name" label="First Name" error={this.state.errors.firstName}/></td></tr>
                        <tr><td><TextInput name="last-name" label="Last Name" error={this.state.errors.lastName}/></td></tr>
                        <tr><td><TextInput name="email-address" label="E-mail Address" error={this.state.errors.emailAddress}/></td></tr>
                        <tr><td><label className="email-label">Message</label></td></tr>
                        <tr><td><textarea id="email-message" rows="8" cols="40"></textarea></td></tr>
                        <tr><td><button type="submit" onClick={this.sendEmail}>Send</button></td></tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

ContactForm.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(emailActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(ContactForm);
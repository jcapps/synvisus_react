import React, {PropTypes} from 'react';
import ContactForm from './ContactForm';

class ContactUsPage extends React.Component {
    componentDidMount() {
        document.title = "Synvisus: Contact Us";
        window.scrollTo(0, 0);
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
                <ContactForm />
            </div>
        );
    }
}

export default ContactUsPage;
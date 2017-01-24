import React from 'react';

class ContactUsPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
                <table>
                    <tbody>
                        <tr><td className="email-label">Name</td></tr>
                        <tr><td><input maxLength="25"/></td></tr>
                        <tr><td><span>First</span></td></tr>
                        <tr><td><input maxLength="25"/></td></tr>
                        <tr><td><span>Last</span></td></tr>
                        <tr><td className="email-label">E-mail Address</td></tr>
                        <tr><td><input maxLength="50"/></td></tr>
                        <tr><td className="email-label">Message</td></tr>
                        <tr><td><textarea rows="8" cols="40"></textarea></td></tr>
                        <tr><td><button>Send</button></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContactUsPage;
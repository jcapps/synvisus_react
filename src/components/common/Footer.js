import React from 'react';

const openTerms = () => {
    window.open('/terms', null, 'height=500, width=500');
};

const openPrivacy = () => {
    window.open('/privacy', null, 'height=500, width=500');
};

const Footer = () => {
    return (
        <footer>
            <span><a onClick={openTerms}>Terms of Use</a></span>
            <span> | </span>
            <span><a onClick={openPrivacy}>Privacy Policy</a></span>

            <p>
                &copy; 2014 Synvisus LLC | P.O. Box 410474, St. Louis, MO 63141 | (314) 384-6204
            </p>
        </footer>
    );
};

export default Footer;
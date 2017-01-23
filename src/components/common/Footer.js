import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Footer = () => {
    return (
        <footer>
            <span>Terms of Use</span>
            <span> | </span>
            <span>Privacy Policy</span>

            <p>
                &copy; 2014 Synvisus LLC | P.O. Box 410474, St. Louis, MO 63141 | (314) 384-6204
            </p>
        </footer>
    );
};

export default Footer;
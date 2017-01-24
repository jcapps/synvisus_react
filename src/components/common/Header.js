import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({loading}) => {
    return (
        <header>
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                <Link to="/about" activeClassName="active">About Us</Link>
                <Link to="/whatwedo" activeClassName="active">What We Do</Link>
                <Link to="/courses" activeClassName="active">Courses</Link>
                <Link to="/contact" activeClassName="active">Contact Us</Link>
            </nav>
        </header>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
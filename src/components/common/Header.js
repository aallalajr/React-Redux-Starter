import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/orgs" activeClassName="active">Orgs</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.protoTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
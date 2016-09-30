import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const OrgListRow = ({orgs}) => {
    return (
        <tr>
            <td><a href={orgs.url} target="_blank">Website</a></td>
            <td><Link to={'/org/' + orgs.id}>{orgs.title}</Link></td>
            <td>{orgs.memberId}</td>
            <td>{orgs.category}</td>
        </tr>
    );    
};

OrgListRow.propTypes = {
    orgs: PropTypes.object.isRequired
};

export default OrgListRow;
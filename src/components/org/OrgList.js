import React, {PropTypes} from 'react';
import OrgListRow from './OrgListRow';

const OrgList = ({orgs}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>President</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {orgs.map(org => 
                    <OrgListRow key={org.id} orgs={org}/>
                )}
            </tbody>
        </table>
    );
};

OrgList.propTypes = {
    orgs: PropTypes.array.isRequired
};

export default OrgList;
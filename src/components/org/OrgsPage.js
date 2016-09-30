import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orgActions from '../../actions/orgActions';
import OrgList from './OrgList';
import {browserHistory} from 'react-router';

class OrgsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddOrgPage = this.redirectToAddOrgPage.bind(this);
    }
            
    orgRow(org, index) {
        return <div key={index}>{org.title}</div>;
    }
    
    redirectToAddOrgPage() {
        browserHistory.push('/org');
    }
    
    render() {
        const {orgs} = this.props;
        
        return (
            <div>
                <h1>Orgs</h1>
                <input type="submit"
                    value="Add Org"
                    className="btn btn-primary"
                    onClick={this.redirectToAddOrgPage} />
                <OrgList orgs={orgs} />
            </div>
        );
    }
}

OrgsPage.propTypes = {
    orgs: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        orgs: state.orgs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(orgActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgsPage);
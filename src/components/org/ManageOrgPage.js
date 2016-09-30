import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orgActions from '../../actions/orgActions';
import OrgForm from './OrgForm';
import toastr from 'toastr';
import {membersFormattedForDropdown} from '../../selectors/selectors';

export class ManageOrgPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            org: Object.assign({}, props.org),
            errors: {},
            saving: false
        };
        
        this.updateOrgState = this.updateOrgState.bind(this);
        this.saveOrg = this.saveOrg.bind(this); 
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.org.id !== nextProps.org.id) {
            this.setState({org: Object.assign({}, nextProps.org)});
        }
    }
    
    updateOrgState(event) {
        const field = event.target.name;
        let org = this.state.org;
        org[field] = event.target.value;
        return this.setState({org: org});
    }
    
    orgFormIsValid() {
        let formIsValid = true;
        let errors = {};
        
        if (this.state.org.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }
        
        this.setState({errors: errors});
        return formIsValid;
    }
    
    saveOrg(event) {
        event.preventDefault();
        
        if(!this.orgFormIsValid()) {
            return;
        }
        
        this.setState({saving: true});
        
        this.props.actions.saveOrg(this.state.org)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);   
                this.setState({saving: false});
            });         
    }
    
    redirect() {        
        this.setState({saving: false});
        toastr.success('Org saved');    
        this.context.router.push('/orgs');
    }
    
    render() {
        return (
            <OrgForm
                allMembers={this.props.members}
                onChange={this.updateOrgState}
                onSave={this.saveOrg}
                org={this.state.org}
                errors={this.state.errors}
                saving={this.state.saving}
                />
        );
    }
}

ManageOrgPage.propTypes = {
    org: PropTypes.object.isRequired,
    members: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageOrgPage.contextTypes = {
    router: PropTypes.object
};

function getOrgById(orgs, id) {
    const org = orgs.filter(org => org.id === id);
    if(org.length) return org[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const orgId = ownProps.params.id;
    
    let org = { id: '', url: '', memberId: '', category: '', title: ''};
    
    if(orgId && state.orgs.length > 0) {
        org = getOrgById(state.orgs, orgId);
    }
    
    return {
        org: org,
        members: membersFormattedForDropdown(state.members)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(orgActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrgPage);
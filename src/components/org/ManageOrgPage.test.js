import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageOrgPage} from './ManageOrgPage';

describe('Manage Org Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            members: [],
            actions: { saveOrg: () => { return Promise.resolve(); }},
            org: { id: '', url: '', memberId: '', category: '', title: ''}
        };
        
        const wrapper = mount(<ManageOrgPage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');        
    });
});
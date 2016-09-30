import expect from 'expect';
import orgReducer from './orgReducer';
import * as actions from '../actions/orgActions';

describe('Org Reducer', () => {
    it('should add org when passed CREATE_ORG_SUCCESS', () => {
        //arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];
        
        const newOrg = {title: 'C'};
        
        const action = actions.createOrgSuccess(newOrg);
        
        //action
        const newState = orgReducer(initialState, action);
        
        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });
    
    it('should update org when passed UPDATE_ORG_SUCCESS', () => {
        //arrange
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];
        
        const org = {id: 'B', title: 'New Title'};        
        const action = actions.updateOrgSuccess(org);
        
        //action
        const newState = orgReducer(initialState, action);
        const updatedCourse = newState.find(a => a.id === org.id);
        const untouchedOrg = newState.find(a => a.id === 'A');
        
        //assert
        expect(updatedCourse.title).toEqual('New Title');
        expect(untouchedOrg.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});
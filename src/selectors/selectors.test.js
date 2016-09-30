import expect from 'expect';
import {membersFormattedForDropdown} from './selectors';

describe('Member Selectors', () => {
    describe('membersFormattedForDropdown', () => {
        it('should return member data formatted for use in a dropdown', () => {
            const members = [
                {id: 'john-doe', firstName: 'John', lastName: 'Doe'},
                {id: 'jane-doe', firstName: 'Jane', lastName: 'Doe'}
            ];
            
            const expected = [
                {value: 'john-doe', text: 'John Doe'},
                {value: 'jane-doe', text: 'Jane Doe'}
            ];
            
            expect(membersFormattedForDropdown(members)).toEqual(expected);
        });
    });
});
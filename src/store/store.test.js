import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as orgActions from '../actions/orgActions';

describe('Store', function() {
  it('Should handle creating orgs', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const org = {
      title: "MISSO"
    };

    // act
    const action = orgActions.createOrgSuccess(org);
    store.dispatch(action);

    // assert
    const actual = store.getState().orgs[0];
    const expected = {
      title: "MISSO"
    };

    expect(actual).toEqual(expected);
  });
});
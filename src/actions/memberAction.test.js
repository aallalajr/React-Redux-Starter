import expect from 'expect';
import * as orgActions from './orgActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Org Actions', () => {
  describe('createOrgSuccess', () => {
    it('should create a CREATE_ORG_SUCCESS action', () => {
      //arrange
      const org = {id: 'misso', title: 'MISSO'};
      const expectedAction = {
        type: types.CREATE_ORG_SUCCESS,
        org: org
      };

      //act
      const action = orgActions.createOrgSuccess(org);
            
      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_ORGS_SUCCESS when loading orgs', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/orgs')
    //   .reply(200, { body: { org: [{ id: 1, firstName: 'John', lastName: 'Doe'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_ORGS_SUCCESS, body: {orgs: [{id: 'misso', title: 'MISSO'}]}}
    ];

    const store = mockStore({orgs: []}, expectedActions);
    store.dispatch(orgActions.loadOrgs()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_ORGS_SUCCESS);
      done();
    });
  });
});
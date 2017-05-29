
import { fromJS } from 'immutable';
import personalFormReducer from '../reducer';

describe('personalFormReducer', () => {
  it('returns the initial state', () => {
    expect(personalFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});

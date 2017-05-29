import { createSelector } from 'reselect';

/**
 * Direct selector to the personalForm state domain
 */
const selectPersonalFormDomain = () => (state) => state.get('personalForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PersonalForm
 */

const makeSelectPersonalForm = () => createSelector(
  selectPersonalFormDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPersonalForm;
export {
  selectPersonalFormDomain,
};

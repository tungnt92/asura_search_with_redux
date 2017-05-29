/*
 *
 * PersonalForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPersonalForm from './selectors';

export class PersonalForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="PersonalForm"
          meta={[
            { name: 'description', content: 'Description of PersonalForm' },
          ]}
        />
      </div>
    );
  }
}

PersonalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PersonalForm: makeSelectPersonalForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);

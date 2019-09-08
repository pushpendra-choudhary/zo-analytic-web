import React, {Component} from 'react';
import Signin from '../Components/Signin';
import ActionTypes from '../../../Actions/ActionTypes';
import {connect} from 'react-redux';

class Auth extends Component {
  onLogin = () => {
    const {login} = this.props;
    login();
  };

  render() {

    const { isLoggedIn } = this.props;
    if(isLoggedIn) window.location.href = '/analytics';

    return <Signin onLogin={this.onLogin} />;
  }
}
const mapStateToProps = state => {
  const { auth } = state;
  const { isLoggedIn = false } = auth;
  return {
    isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  login: () => {
    dispatch({
      type: ActionTypes.LOGIN_REQUEST_SUCCESS,
      payload: {},
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

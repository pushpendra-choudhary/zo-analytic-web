import React, {Component} from 'react';

import styles from '../styles';

export default class Signin extends Component {
  render() {
    const {onLogin} = this.props;
    return (
      <>
      <div style={styles.header}>
        <p style={styles.login} onClick={onLogin}>
          Login
        </p>
      </div>
      <img src="https://barnraisersllc.com/wp-content/uploads/2016/07/web-analytics-tool.png" style={{width:'100%'}} />
      </>
    );
  }
}

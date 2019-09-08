import React from 'react';
import styles from '../styles';

export default function Header(props) {
  const {onLogout} = props;
  return (
    <>
      <div style={styles.header}>
        <p style={styles.logout} onClick={onLogout}>
          {' '}
          Logout{' '}
        </p>
      </div>
    </>
  );
}

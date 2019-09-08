import React from 'react';
import styles from '../styles';

const Separator = props => {
  const {customStyle = {}} = props;
  const separatorStyle = {
    ...styles.separator,
    ...customStyle,
  };

  return <div style={separatorStyle} />;
};

export default Separator;

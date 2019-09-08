import React from 'react';
import styles from '../styles';

export default function WithHeader(WrappedFunction, props) {
  const {title, description, data} = props;

  function addHeader() {
    return (
      <>
        <p style={styles.chartHeading}>{title}</p>
        <p style={styles.chartDescription}>{description}</p>
        <WrappedFunction data={data} />
      </>
    );
  }

  return addHeader;
}

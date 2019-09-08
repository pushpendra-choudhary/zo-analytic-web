import React from 'react';
import styles from '../styles';

export default function ProgressChart(props) {
  const { data } = props;
  const { yes = 0, no = 0 } = data;
  const total = yes + no;

  if (yes > 0 || no > 0) {
    const yesProgress = yes / total;
    const noProgress = 1 - yesProgress;

    const yesStyle = {
      ...styles.yesProgress,
      flex: yesProgress
    }

    const noStyle = {
      ...styles.noProgress,
      flex: noProgress
    }

    return (
      <div style={{
        display: 'flex',
        flex: 1, height: '100%',
        justifyContent: 'flex-end', alignItems: 'center'
      }}>
        <div style={{ width: '100%' }}>
          <div style={styles.progressContainter}>
            <div style={yesStyle}></div>
            <div style={noStyle}></div>
          </div>
          {
            <>
              <p style={styles.yesText}>{`Yes: ${yesProgress.toFixed(2) *
                100}%`}</p>
              <p style={styles.noText}>{`No: ${noProgress.toFixed(2) *
                100}%`}</p>
            </>
          }
        </div>
      </div>
    );
  } else {
    return null;
  }
}

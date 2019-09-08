import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory';

export default function BarChart(props) {
  const {data} = props;
  return (
    <div >
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar style={{data: {fill: '#c43a31'}}} data={data} />
      </VictoryChart>
      {
        <>
          <p>- Y Axis: No of Restaurants</p>
          <p> - X Axis: Ratings(0 to 5)</p>
        </>
      }
    </div>
  );
}

import React from 'react';
import {VictoryPie} from 'victory';

export default function PieChart(props) {
  const {data} = props;
  return (
    <VictoryPie
      colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
      data={data}
    />
  );
}
